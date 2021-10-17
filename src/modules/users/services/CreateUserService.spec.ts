import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';


describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);

    const user = await createUser.execute({
      name: 'teste',
      username: 'testeusername',
      email: 'email@teste.com',
      password: 'password123',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);

    await createUser.execute({
      name: 'teste',
      username: 'testeusername',
      email: 'email@teste.com',
      password: 'password123',
    });

    expect(
      createUser.execute({
        name: 'teste',
        username: 'testeusername',
        email: 'email@teste.com',
        password: 'password123',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
