import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ITeamActivitiesRepository from '../repositories/ITeamActivitiesRepository';
import TeamActivities from '../infra/typeorm/entities/TeamActivity';
import ITeamsRepository from '../repositories/ITeamsRepository';
import IActivitiesRepository from '@modules/activities/repositories/IActivitiesRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  status: string;
  team_id: string;
  activity_id: string;
  participant_id: string;
}

@injectable()
class CreateTeamActivityService {
  constructor(
    @inject('TeamActivitiesRepository')
    private teamActivitiesRepository: ITeamActivitiesRepository,
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    status,
    team_id,
    activity_id,
    participant_id
  }: IRequest): Promise<TeamActivities> {
    if (!team_id) {
      throw new AppError('Team is mandatory');
    }

    if (!activity_id) {
      throw new AppError('Activity is mandatory');
    }

    if (!participant_id) {
      throw new AppError('Participant is mandatory');
    }

    const team = await this.teamsRepository.findById(team_id);

    if (!team) {
      throw new AppError('Team does not exists');
    }

    const activity = await this.activitiesRepository.findById(activity_id);

    if (!activity) {
      throw new AppError('Activity does not exists');
    }

    const participant = await this.usersRepository.findById(participant_id);

    if (!participant) {
      throw new AppError('Participant does not exists');
    }

    const teamActivity = await this.teamActivitiesRepository.create({
      status,
      team_id,
      activity_id,
      participant_id
    });

    return teamActivity;
  }
}

export default CreateTeamActivityService;
