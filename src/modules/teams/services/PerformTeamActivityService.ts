import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ITeamActivitiesRepository from '../repositories/ITeamActivitiesRepository';
import TeamActivities from '../infra/typeorm/entities/TeamActivity';
import ITeamsRepository from '../repositories/ITeamsRepository';
import IActivitiesRepository from '@modules/activities/repositories/IActivitiesRepository';
import IActivityResponsesRepository from '@modules/activities/repositories/IActivityResponsesRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  team_activity_id: string;
}

@injectable()
class PerformTeamActivityService {
  constructor(
    @inject('TeamActivitiesRepository')
    private teamActivitiesRepository: ITeamActivitiesRepository,
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {}

  public async execute({
    team_activity_id
  }: IRequest): Promise<TeamActivities> {
    const teamActivity = await this.teamActivitiesRepository.findById(team_activity_id);

    if (!teamActivity) {
      throw new AppError('Team activity not found');
    }

    if (teamActivity.activity_id) {
      const activity = await this.activitiesRepository.findById(teamActivity.activity_id);

      if (!activity){
        throw new AppError('Activity not found');
      }
      teamActivity.points = activity.points;
    }

    const diff = Math.abs(new Date().getTime() - (teamActivity.created_at.getTime()-(1000*60*60*3)));
    teamActivity.time = Math.ceil(diff/1000);

    teamActivity.status = 'FINISHED';

    return this.teamActivitiesRepository.save(teamActivity);
  }
}

export default PerformTeamActivityService;
