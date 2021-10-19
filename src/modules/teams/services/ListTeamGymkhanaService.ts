import { injectable, inject } from 'tsyringe';
import Team from '@modules/teams/infra/typeorm/entities/Team';
import ITeamsRepository from '../repositories/ITeamsRepository';

interface IRequest {
  gymkhana_id: string;
}

@injectable()
class ListTeamGymkhanaService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}

  public async execute({ gymkhana_id }: IRequest): Promise<Team[]> {
    const teams = await this.teamsRepository.findAllByGymkhana( gymkhana_id );

    return teams;
  }
}

export default ListTeamGymkhanaService;
