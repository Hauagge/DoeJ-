import { inject, injectable } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUsersTokensRepository from '@modules/users/repositories/IUSersTokensRepository';

import IMailProvider from '@shared/container/providers/mailProvider/models/IMailProvider';

import AppError from '@shared/erros/AppErros';
// import AppError from '@shared/erros/AppErros';
// import User from '../Infra/typeorm/entities/User';

interface IRequest {
  email: string;
}
@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UserTokenRepository')
    private userTokenRepository: IUsersTokensRepository,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const checkUserExist = await this.usersRepository.findByEmail(email);
    if (!checkUserExist) {
      throw new AppError('User  does not exist');
    }

    await this.userTokenRepository.generate(checkUserExist.id);
    this.mailProvider.sendMail(
      email,
      'Pedido de recuperação de desenha recebido',
    );
  }
}

export default SendForgotPasswordEmailService;
