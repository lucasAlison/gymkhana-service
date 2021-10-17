import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ITeamsRepository from '../repositories/ITeamsRepository';
import Team from '@modules/teams/infra/typeorm/entities/Team';

interface IRequest {
  name: string;
}

@injectable()
class CreateTeamService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}

  public async execute({
    name,
  }: IRequest): Promise<Team> {
    const checkTeamExists = await this.teamsRepository.findByName(name);

    if (checkTeamExists) {
      throw new AppError('There is already a team with this name');
    }

    const team = await this.teamsRepository.create({
      name,
    });

    return team;
  }
}

export default CreateTeamService;
