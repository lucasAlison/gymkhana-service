import ITeamsRepository from '@modules/teams/repositories/ITeamsRepository';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Team from '@modules/teams/infra/typeorm/entities/Team';
import IGymkhanasRepository from '@modules/gymkhanas/repositories/IGymkhanasRepository';

interface IRequest {
  team_id: string;
}

@injectable()
class ShowTeamService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
    @inject('GymkhanasRepository')
    private gymkhanasRepository: IGymkhanasRepository
  ) {}

  public async execute({ team_id }: IRequest): Promise<Team> {
    const team = await this.teamsRepository.findById(team_id);

    if (!team) {
      throw new AppError('Team does not exists');
    }

    if (team.gymkhana_id) {
      const gymkhana = await this.gymkhanasRepository.findById(team.gymkhana_id);

      if (gymkhana){
        team.gymkhana = gymkhana;
      }
    }

    return team;
  }
}

export default ShowTeamService;
