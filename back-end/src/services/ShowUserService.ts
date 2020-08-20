import { getRepository } from 'typeorm';

import AppError from '@shared/erros/AppErros';
import User from '../entities/User';

interface IRequest {
  user_id: string;
}

class ShowProfileService {
  public async execute({ user_id }: IRequest): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(user_id);
    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    return user;
  }
}
export default ShowProfileService;
