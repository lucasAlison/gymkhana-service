import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findByUsername(username: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  findAllByTeam(team_id: string): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  save(user: User): Promise<User>;
  remove(user: User): Promise<User>;
}
