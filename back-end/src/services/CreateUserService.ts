import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../entities/User';

// interface IIdenfificador {
//   ID: number;
//   nome: string;
// }

interface IRequest {
  login: string;
  nome: string;
  email: string;
  senha: string;
  identifier_ID: number;
}

class CreateUserService {
  public async execute({
    login,
    nome,
    email,
    senha,
    identifier_ID,
  }: IRequest): Promise<User> {
    const userRepository = getRepository(User);

    const findUser = await userRepository.findOne({
      where: { email },
    });

    if (findUser) {
      throw Error('Este email de usuario ja existe');
    }
    const hashedPassword = await hash(senha, 8);

    const user = userRepository.create({
      nome,
      email,
      login,
      senha: hashedPassword,
    });

    await userRepository.save(user);

    delete user.senha;

    return user;
  }
}

export default CreateUserService;
