import ITeamsRepository from '@modules/teams/repositories/ITeamsRepository';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Team from '@modules/teams/infra/typeorm/entities/Team';

interface IRequest {
  team_id: string;
}

@injectable()
class ShowTeamService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
  ) {}

  public async execute({ team_id }: IRequest): Promise<Team> {
    const team = await this.teamsRepository.findById(team_id);

    if (!team) {
      throw new AppError('User does not exists');
    }

    return team;
  }
}

export default ShowTeamService;
