import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class IndexUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute(): Promise<Object[]> {
    const users = await this.usersRepository.findAll();

    const usersResponse = users.map(user => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        created_at: user.created_at,
        updated_ad: user.updated_at
      };
    });

    return usersResponse;
  }
}

export default IndexUserService;
