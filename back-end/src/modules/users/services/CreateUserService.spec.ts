import AppError from '@shared/erros/AppErros';
import FakeHashRepository from '../providers/hashProviders/fakes/fakeHashrovider';

import FakeUserRepositry from '../repositories/fakes/fakeUserRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to  cerate a new user', async () => {
    const fakeUserRepositry = new FakeUserRepositry();
    const fakeHashRepository = new FakeHashRepository();

    const createUSer = new CreateUserService(
      fakeUserRepositry,
      fakeHashRepository,
    );

    const user = await createUSer.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123123123',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to  cerate a new user with same email from another', async () => {
    const fakeHashRepository = new FakeHashRepository();
    const fakeUserRepositry = new FakeUserRepositry();
    const createUSer = new CreateUserService(
      fakeUserRepositry,
      fakeHashRepository,
    );

    await createUSer.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123123',
    });

    await expect(
      createUSer.execute({
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
