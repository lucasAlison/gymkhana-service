import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import ITeamsRepository from '../repositories/ITeamsRepository';


interface IRequest {
  team_id: string;
}

@injectable()
class RemoveTeamService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
  ) {}

  public async execute({ team_id }: IRequest): Promise<void> {
    const team = await this.teamsRepository.findById(team_id);

    if (!team) {
      throw new AppError('Team does not exists');
    }

    await this.teamsRepository.remove(team);
  }
}

export default RemoveTeamService;
