import ITeamsRepository from '@modules/teams/repositories/ITeamsRepository';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import User from '../infra/typeorm/entities/User';

import IUsersRepository from '../repositories/IUsersRepository';
interface IRequest {
  email: string;
}

@injectable()
class ShowUserEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
  ) {}

  public async execute({ email }: IRequest): Promise<User> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists');
    }

    if (user.team_id) {
      const team = await this.teamsRepository.findById(user.team_id);

      if (team){
        user.team = team;
      }
    }


    return user;
  }
}

export default ShowUserEmailService;
