import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import { isProvider } from 'tsyringe/dist/typings/providers/provider';
import User from '../infra/typeorm/entities/User';

import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  id: string;
}

@injectable()
class UnlinkedUserTeamService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<User> {
    var user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    user.team_id = null;

    const userResponse = await this.usersRepository.save(user);

    return userResponse;
  }
}

export default UnlinkedUserTeamService;
