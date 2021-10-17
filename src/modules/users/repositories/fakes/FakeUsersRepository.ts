import { uuid } from 'uuidv4';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  public async findByUsername(username: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.username === username);

    return findUser;
  }

  public async findAllByTeam(team_id: string): Promise<User[]> {
    const findUser = this.users.filter(user => user.team_id === team_id);

    return findUser;
  }

  public async create({
    name,
    username,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid(), name, username, email, password });

    this.users.push(user);

    return user;
  }

  public async findAll() {
    return this.users;
  }
}

export default UsersRepository;
