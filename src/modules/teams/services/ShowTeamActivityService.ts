import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import ITeamActivitiesRepository from '../repositories/ITeamActivitiesRepository';
import TeamActivities from '../infra/typeorm/entities/TeamActivity';
import ITeamsRepository from '../repositories/ITeamsRepository';
import IActivitiesRepository from '@modules/activities/repositories/IActivitiesRepository';

interface IRequest {
  team_activity_id: string;
}

@injectable()
class ShowTeamActivityService {
  constructor(
    @inject('TeamActivitiesRepository')
    private teamActivitiesRepository: ITeamActivitiesRepository,
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {}

  public async execute({ team_activity_id }: IRequest): Promise<TeamActivities> {
    const teamActivity = await this.teamActivitiesRepository.findById(team_activity_id);

    if (!teamActivity) {
      throw new AppError('Team activity does not exists');
    }

    if (teamActivity.team_id) {
      const team = await this.teamsRepository.findById(teamActivity.team_id);

      if (team){
        teamActivity.team = team;
      }
    }

    if (teamActivity.activity_id) {
      const activity = await this.activitiesRepository.findById(teamActivity.activity_id);

      if (activity){
        teamActivity.activity = activity;
      }
    }
    return teamActivity;
  }
}

export default ShowTeamActivityService;
