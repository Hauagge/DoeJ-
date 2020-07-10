import { getRepository } from 'typeorm';

import User from '../entities/User';

interface IRequest {
  id: string;
  endereco: string;
  telefoneOpc: string;
  telefoneMov: string;
}

class UpdateUserService {
  public async execute({
    id,
    endereco,
    telefoneOpc,
    telefoneMov,
  }: IRequest): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw Error('Este  usuario não ja existe');
    }

    user.endereco = endereco;
    user.telefoneOpc = telefoneOpc;
    user.telefoneMov = telefoneMov;

    await userRepository.save(user);

    delete user.senha;
    return user;
  }
}

export default UpdateUserService;
