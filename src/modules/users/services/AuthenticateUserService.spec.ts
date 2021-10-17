import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';


describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider
    const createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
    const authenticateUser = new AuthenticateUserService(fakeUsersRepository, fakeHashProvider);

    await createUser.execute({
      name: 'John Doe',
      username: 'john.doe',
      email: 'johndoe@teste.com',
      password: 'password123',
    });

    const response = await authenticateUser.execute({
      username: 'john.doe',
      password: 'password123',
    });

    expect(response).toHaveProperty('token');
  });

  it('should not be able to authenticate with non existing user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider
    const authenticateUser = new AuthenticateUserService(fakeUsersRepository, fakeHashProvider);

    expect(authenticateUser.execute({
      username: 'john.doe',
      password: 'password123',
    })).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider
    const createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
    const authenticateUser = new AuthenticateUserService(fakeUsersRepository, fakeHashProvider);

    await createUser.execute({
      name: 'John Doe',
      username: 'john.doe',
      email: 'johndoe@teste.com',
      password: 'password123',
    });

    expect(authenticateUser.execute({
      username: 'john.doe',
      password: 'wrong-password',
    })).rejects.toBeInstanceOf(AppError);
  });

 });
