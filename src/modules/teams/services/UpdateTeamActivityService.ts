import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ITeamActivitiesRepository from '../repositories/ITeamActivitiesRepository';
import TeamActivities from '../infra/typeorm/entities/TeamActivity';

interface IRequest {
  team_activity_id: string;
  status: string;
  points: number;
  latitude: number;
  longitude: number;
  time: number;
}

@injectable()
class UpdateTeamActivityService {
  constructor(
    @inject('TeamActivitiesRepository')
    private teamActivitiesRepository: ITeamActivitiesRepository,
  ) {}

  public async execute({
    team_activity_id,
    status,
    points,
    latitude,
    longitude,
    time
  }: IRequest): Promise<TeamActivities> {
    const teamActivity = await this.teamActivitiesRepository.findById(team_activity_id);

    if (!teamActivity) {
      throw new AppError('Team activity not found');
    }

    teamActivity.status = status;
    teamActivity.points = points;
    teamActivity.latitude = latitude;
    teamActivity.longitude = longitude;
    teamActivity.time = time;

    return this.teamActivitiesRepository.save(teamActivity);
  }
}

export default UpdateTeamActivityService;
