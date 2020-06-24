import AppError from '@shared/erros/AppErros';
import FakeMailProvider from '@shared/container/providers/mailProvider/fakes/fakeMailProvider';
import FakeUserTokenRepositry from '../repositories/fakes/fakeUserTokenRepository';
import FakeUserRepositry from '../repositories/fakes/fakeUserRepository';

import SendForgotPasswordEmail from './SendForgotPasswordMailServie';

let fakeUserRepositry: FakeUserRepositry;
let fakeMailProvider: FakeMailProvider;
let fakeUserTokenRepository: FakeUserTokenRepositry;
let sendForgotPasswordEmail: SendForgotPasswordEmail;

describe('SendForgotPasswordEmail', () => {
  it('should be able to  recover  the password using email', async () => {
    const fakeUserRepositry = new FakeUserRepositry();
    const fakeMailProvider = new FakeMailProvider();

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');
    const sendForgotPasswordEmail = new SendForgotPasswordEmail(
      fakeUserRepositry,
      fakeMailProvider,
    );

    await fakeUserRepositry.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await sendForgotPasswordEmail.execute({
      email: 'johndoe@email.com',
    });
    expect(sendMail).toHaveBeenCalled();
  });

  it('sould not be able to recover a non-existing user password', async () => {
    const fakeUserRepositry = new FakeUserRepositry();
    const fakeMailProvider = new FakeMailProvider();

    const sendForgotPasswordEmail = new SendForgotPasswordEmail(
      fakeUserRepositry,
      fakeMailProvider,
    );

    await expect(
      sendForgotPasswordEmail.execute({
        email: 'johndoe@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to  recover  the password using email', async () => {
    FakeUserRepositry;
    FakeMailProvider;
    FakeUserTokenRepositry;
    SendForgotPasswordEmail;

    const generateToken = jest.spyOn(fakeUserTokenRepository, 'generate');

    const sendForgotPasswordEmail = new SendForgotPasswordEmail(
      fakeUserRepositry,
      fakeMailProvider,
      fakeUserTokenRepository,
    );

    const user = await fakeUserRepositry.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await sendForgotPasswordEmail.execute({
      email: 'johndoe@email.com',
    });
    expect(generateToken).toHaveBeenCalledWith(user.id);
  });
});
