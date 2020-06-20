// import AppError from '@shared/erros/AppErros';
import AppError from '@shared/erros/AppErros';
import FakeUserRepositry from '../repositories/fakes/fakeUserRepository';
import FakeHashRepository from '../providers/hashProviders/fakes/fakeHashrovider';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to  authenticate', async () => {
    const fakeUserRepositry = new FakeUserRepositry();
    const fakeHashRepository = new FakeHashRepository();

    const createUser = new CreateUserService(
      fakeUserRepositry,
      fakeHashRepository,
    );
    const authenticateUSer = new AuthenticateUserService(
      fakeUserRepositry,
      fakeHashRepository,
    );

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '1231231232',
    });

    const response = await authenticateUSer.execute({
      email: 'johndoe@email.com',
      password: '1231231232',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to  authenticate with none existing user', async () => {
    const fakeUserRepositry = new FakeUserRepositry();
    const fakeHashRepository = new FakeHashRepository();

    const authenticateUSer = new AuthenticateUserService(
      fakeUserRepositry,
      fakeHashRepository,
    );

    await expect(
      authenticateUSer.execute({
        email: 'johndoe@email.com',
        password: '1231231232',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('should not be able to  authenticate with wrong password', async () => {
    const fakeUserRepositry = new FakeUserRepositry();
    const fakeHashRepository = new FakeHashRepository();

    const createUser = new CreateUserService(
      fakeUserRepositry,
      fakeHashRepository,
    );
    const authenticateUSer = new AuthenticateUserService(
      fakeUserRepositry,
      fakeHashRepository,
    );

    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '1231231232',
    });

    await expect(
      authenticateUSer.execute({
        email: 'johndoe@email.com',
        password: '1231231876',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
