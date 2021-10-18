import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ITeamsRepository from '../repositories/ITeamsRepository';
import Team from '@modules/teams/infra/typeorm/entities/Team';

interface IRequest {
  team_id: string;
  name: string;
}

@injectable()
class UpdateTeamService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}

  public async execute({
    team_id,
    name,
  }: IRequest): Promise<Team> {
    const team = await this.teamsRepository.findById(team_id);

    if (!team) {
      throw new AppError('Team not found');
    }

    team.name = name;

    return this.teamsRepository.save(team);
  }
}

export default UpdateTeamService;
