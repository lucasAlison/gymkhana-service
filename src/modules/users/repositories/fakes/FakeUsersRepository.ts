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

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id);

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

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[findIndex] = user;

    return user;
  }

  public async remove(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users.slice(findIndex, 1);

    return user;
  }

}

export default UsersRepository;
