import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import ITeamActivitiesRepository from '../repositories/ITeamActivitiesRepository';


interface IRequest {
  team_activity_id: string;
}

@injectable()
class RemoveTeamActivityService {
  constructor(
    @inject('TeamActivitiesRepository')
    private teamActivitiesRepository: ITeamActivitiesRepository,
  ) {}

  public async execute({ team_activity_id }: IRequest): Promise<void> {
    const teamActivity = await this.teamActivitiesRepository.findById(team_activity_id);

    if (!teamActivity) {
      throw new AppError('Team activity does not exists');
    }

    await this.teamActivitiesRepository.remove(teamActivity);
  }
}

export default RemoveTeamActivityService;
