import ITipsRepository from '@modules/activities/repositories/ITipsRepository';
import ITeamActivitiesRepository from '@modules/teams/repositories/ITeamActivitiesRepository';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  team_activity_id: string;
}

@injectable()
class LevelService {
  constructor(
    @inject('TeamActivitiesRepository')
    private teamActivitiesRepository: ITeamActivitiesRepository,
    @inject('TipsRepository')
    private tipsRepository: ITipsRepository,
  ) {}

  public async execute({ team_activity_id }: IRequest): Promise<Object> {
    const teamActivity = await this.teamActivitiesRepository.findById(team_activity_id);

    if (!teamActivity?.activity_id){
      throw new AppError('Activity does not exists');
    }

    const tips = await this.tipsRepository.findAllByActivity(teamActivity?.activity_id);

    const levels =
      {
        id: 0,
        levelName: "Level 1",
        sceneSequence: ["Tip","Tracking","Question"],
        tipId: tips[0].id,
        questionId: teamActivity?.activity_id,
        trackingId: teamActivity?.activity_id
      };
    return levels;
  }
}

export default LevelService;
