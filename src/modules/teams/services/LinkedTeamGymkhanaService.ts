import IGymkhanasRepository from '@modules/gymkhanas/repositories/IGymkhanasRepository';
import ITeamsRepository from '@modules/teams/repositories/ITeamsRepository';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Team from '@modules/teams/infra/typeorm/entities/Team';

interface IRequest {
  id: string;
  gymkhana_id: string;
}

@injectable()
class LinkedTeamGymkhanaService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
    @inject('GymkhanasRepository')
    private gymkhanasRepository: IGymkhanasRepository,
  ) {}

  public async execute({ id, gymkhana_id }: IRequest): Promise<Team> {
    const team = await this.teamsRepository.findById(id);

    if (!team) {
      throw new AppError('Team does not exists');
    }

    const gymkhana = await this.gymkhanasRepository.findById(gymkhana_id);

    if (!gymkhana) {
      throw new AppError('Gymkhana does not exists');
    }

    team.gymkhana_id = gymkhana_id;

    const teamResponse = await this.teamsRepository.save(team);

    return teamResponse;
  }
}

export default LinkedTeamGymkhanaService;
