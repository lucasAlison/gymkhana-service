import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Team from '@modules/teams/infra/typeorm/entities/Team';
import ITeamsRepository from '../repositories/ITeamsRepository';


interface IRequest {
  id: string;
}

@injectable()
class UnlinkedTeamGymkhanaService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Team> {
    var team = await this.teamsRepository.findById(id);

    if (!team) {
      throw new AppError('Team does not exists');
    }

    team.gymkhana_id = null;

    const teamResponse = await this.teamsRepository.save(team);

    return teamResponse;
  }
}

export default UnlinkedTeamGymkhanaService;
