import ITeamsRepository from '@modules/teams/repositories/ITeamsRepository';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import User from '../infra/typeorm/entities/User';

import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  id: string;
  team_id: string;
}

@injectable()
class LinkedUserTeamService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}

  public async execute({ id, team_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const team = await this.teamsRepository.findById(team_id);

    if (!team) {
      throw new AppError('Team does not exists');
    }

    user.team_id = team_id;

    const userResponse = await this.usersRepository.save(user);

    return userResponse;
  }
}

export default LinkedUserTeamService;
