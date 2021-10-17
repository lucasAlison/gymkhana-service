import { injectable, inject } from 'tsyringe';

import ITeamsRepository from '../repositories/ITeamsRepository';
import Team from '../infra/typeorm/entities/Team';

@injectable()
class IndexTeamService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
  ) {}

  public async execute(): Promise<Team[]> {
    const teams = await this.teamsRepository.findAll();

    return teams;
  }
}

export default IndexTeamService;
