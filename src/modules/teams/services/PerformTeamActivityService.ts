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
  activity_response_id: string;
  participant_id: string;
  latitude: number;
  longitude: number;
}

@injectable()
class PerformTeamActivityService {
  constructor(
    @inject('TeamActivitiesRepository')
    private teamActivitiesRepository: ITeamActivitiesRepository,
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
    @inject('ActivityResponsesRepository')
    private activityResponsesRepository: IActivityResponsesRepository,
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    team_activity_id,
    activity_response_id,
    participant_id,
    latitude,
    longitude
  }: IRequest): Promise<TeamActivities> {
    const teamActivity = await this.teamActivitiesRepository.findById(team_activity_id);

    if (!teamActivity) {
      throw new AppError('Team activity not found');
    }

    const activityResponse = await this.activityResponsesRepository.
    findById(activity_response_id);

    if (!activityResponse){
      throw new AppError('Activity response not found');
    }

    if (activityResponse.activity_id !== teamActivity.activity_id) {
      throw new AppError('The answer belongs to another activity');
    }

    const participant = await this.usersRepository.findById(participant_id);

    if (!participant) {
      throw new AppError('Participant not found');
    }

    if (participant.team_id !== teamActivity.team_id) {
      throw new AppError('The participant belongs to another team');
    }

    if (teamActivity.activity_id) {
      const activity = await this.activitiesRepository.findById(teamActivity.activity_id);

      if (!activity){
        throw new AppError('Activity not found');
      }
      if (activityResponse.correct) {
        teamActivity.points = activity.points;
      } else {
        teamActivity.points = 0;
      }
    }

    const diff = Math.abs(new Date().getTime() - (teamActivity.created_at.getTime()-(1000*60*60*3)));
    teamActivity.time = Math.ceil(diff/1000);

    teamActivity.status = 'FINISHED';
    teamActivity.latitude = latitude;
    teamActivity.longitude = longitude;
    teamActivity.participant_id = participant_id;
    teamActivity.activity_response_id = activity_response_id;

    return this.teamActivitiesRepository.save(teamActivity);
  }
}

export default PerformTeamActivityService;
