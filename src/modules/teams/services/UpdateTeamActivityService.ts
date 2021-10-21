import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ITeamActivitiesRepository from '../repositories/ITeamActivitiesRepository';
import TeamActivities from '../infra/typeorm/entities/TeamActivity';
import ITeamsRepository from '../repositories/ITeamsRepository';
import IActivitiesRepository from '@modules/activities/repositories/IActivitiesRepository';

interface IRequest {
  team_activity_id: string;
  status: string;
  team_id: string;
  activity_id: string;
}

@injectable()
class UpdateTeamActivityService {
  constructor(
    @inject('TeamActivitiesRepository')
    private teamActivitiesRepository: ITeamActivitiesRepository,
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {}

  public async execute({
    team_activity_id,
    status,
    team_id,
    activity_id
  }: IRequest): Promise<TeamActivities> {
    const teamActivity = await this.teamActivitiesRepository.findById(team_activity_id);

    if (!teamActivity) {
      throw new AppError('Team activity not found');
    }

    if (!team_id) {
      throw new AppError('Team is mandatory');
    }

    if (!activity_id) {
      throw new AppError('Activity is mandatory');
    }

    const team = await this.teamsRepository.findById(team_id);

    if (!team) {
      throw new AppError('Team does not exists');
    }

    const activity = await this.activitiesRepository.findById(activity_id);

    if (!activity) {
      throw new AppError('Activity does not exists');
    }

    teamActivity.status = status;
    teamActivity.team_id = team_id;
    teamActivity.activity_id = activity_id;

    return this.teamActivitiesRepository.save(teamActivity);
  }
}

export default UpdateTeamActivityService;
