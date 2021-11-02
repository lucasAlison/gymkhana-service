import { injectable, inject } from 'tsyringe';
import TeamActivities from '@modules/teams/infra/typeorm/entities/TeamActivity';
import ITeamActivitiesRepository from '../repositories/ITeamActivitiesRepository';
import IActivitiesRepository from '@modules/activities/repositories/IActivitiesRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  team_id: string;
}

@injectable()
class ListTeamActivityByTeamService {
  constructor(
    @inject('TeamActivitiesRepository')
    private teamActivitiesRepository: ITeamActivitiesRepository,
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  public async execute({ team_id }: IRequest): Promise<TeamActivities[]> {
    const teamActivities = await this.teamActivitiesRepository.findAllByTeam( team_id );
    for(var item of teamActivities) {
      if (item.activity_id) {
        const activity = await this.activitiesRepository.findById(item.activity_id);

        if (activity){
          item.activity = activity;
        }
      }
      if (item.participant_id){
        const participant = await this.usersRepository.findById(item.participant_id);

        if (participant){
           item.participant = participant;
        }
      }
    }
    return teamActivities;
  }
}

export default ListTeamActivityByTeamService;
