import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import ITeamActivitiesRepository from '../repositories/ITeamActivitiesRepository';
import TeamActivities from '../infra/typeorm/entities/TeamActivity';

interface IRequest {
  team_activity_id: string;
}

@injectable()
class ShowTeamActivityService {
  constructor(
    @inject('TeamActivitiesRepository')
    private teamActivitiesRepository: ITeamActivitiesRepository,
  ) {}

  public async execute({ team_activity_id }: IRequest): Promise<TeamActivities> {
    const teamActivity = await this.teamActivitiesRepository.findById(team_activity_id);

    if (!teamActivity) {
      throw new AppError('Team activity does not exists');
    }

    return teamActivity;
  }
}

export default ShowTeamActivityService;
