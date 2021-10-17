import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({
      where: { email },
    });

    return findUser;
  }

  public async findByUsername(username: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({
      where: { username },
    });

    return findUser;
  }

  public async create({
    name,
    username,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({ name, username, email, password });

    await this.ormRepository.save(user);

    return user;
  }

  public async findAll(): Promise<User[]> {
    const users = await this.ormRepository.find();

    return users;
  }

  public async findAllByTeam(team_id: string): Promise<User[]> {
    const users = await this.ormRepository.find({
      where: { team_id },
    });

    return users;
  }
}

export default UsersRepository;
