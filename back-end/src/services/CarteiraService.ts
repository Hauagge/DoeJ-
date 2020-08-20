import { getRepository } from 'typeorm';

import Carteira from '../entities/Carteira';

// interface IIdenfificador {
//   ID: number;
//   nome: string;
// }

interface IRequest {
  id: string;
}

class CreateUserService {
  public async execute({ id }: IRequest): Promise<Carteira> {
    const carteiraRepository = getRepository(Carteira);

    const findUser = await carteiraRepository.findOne(id);

    if (!findUser) {
      throw Error('User not exist');
    }

    // TO DO

    return findUser;
  }
}

export default CreateUserService;
