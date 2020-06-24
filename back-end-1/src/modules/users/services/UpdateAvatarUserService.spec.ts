// import AppError from '@shared/erros/AppErros';
import FakeStoragePRovider from '@shared/container/providers/storageProvider/fakes/fakeStorageProvider';
import AppError from '@shared/erros/AppErros';
// import { TableForeignKey } from 'typeorm';
import FakeUserRepositry from '../repositories/fakes/fakeUserRepository';
import UpdateAvatarUserService from './UpdateAvatarUserService';

describe('CreateUser', () => {
  it('should be able to  update avatar', async () => {
    const fakeUserRepositry = new FakeUserRepositry();
    const fakeStorageProvider = new FakeStoragePRovider();

    const updateUSerAvatar = new UpdateAvatarUserService(
      fakeUserRepositry,
      fakeStorageProvider,
    );

    const user = await fakeUserRepositry.create({
      name: 'Jhon Doe',
      email: 'johndoe@email.com',
      password: '123123123',
    });

    await updateUSerAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg',
    });

    expect(user.avatar).toBe('avatar.jpg');
  });

  it('should not be able to update avatar without a user', async () => {
    const fakeUserRepositry = new FakeUserRepositry();
    const fakeStorageProvider = new FakeStoragePRovider();

    const updateUSerAvatar = new UpdateAvatarUserService(
      fakeUserRepositry,
      fakeStorageProvider,
    );

    await expect(
      updateUSerAvatar.execute({
        user_id: 'id',
        avatarFilename: 'avatar.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should delete old avatar and update a new one ', async () => {
    const fakeUserRepositry = new FakeUserRepositry();
    const fakeStorageProvider = new FakeStoragePRovider();

    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const updateUSerAvatar = new UpdateAvatarUserService(
      fakeUserRepositry,
      fakeStorageProvider,
    );

    const user = await fakeUserRepositry.create({
      name: 'Jhon Doe',
      email: 'johndoe@email.com',
      password: '123123123',
    });

    await updateUSerAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg',
    });

    await updateUSerAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar2.jpg',
    });
    expect(deleteFile).toHaveBeenCalledWith('avatar.jpg');
    expect(user.avatar).toBe('avatar2.jpg');
  });
});
