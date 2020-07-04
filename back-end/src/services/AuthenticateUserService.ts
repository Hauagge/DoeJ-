import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import User from '../entities/User';

interface IRequest {
  email: string;
  senha: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, senha }: IRequest): Promise<IResponse> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw Error('Email ou senha incorreto');
    }

    const passwordMatched = await compare(senha, user.senha);
    if (!passwordMatched) {
      throw Error('Email ou senha incorreto');
    }
    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
