import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Activity from '@modules/activities/infra/typeorm/entities/Activity';
import IActivitiesRepository from '../repositories/IActivitiesRepository';
import IGymkhanasRepository from '@modules/gymkhanas/repositories/IGymkhanasRepository';
import IActivityResponsesRepository from '../repositories/IActivityResponsesRepository';

interface IRequest {
  activity_id: string;
}

@injectable()
class ShowActivityService {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
    @inject('GymkhanasRepository')
    private gymkhanasRepository: IGymkhanasRepository,
    @inject('ActivityResponsesRepository')
    private activityResponseRepository: IActivityResponsesRepository,
  ) {}

  public async execute({ activity_id }: IRequest): Promise<Activity> {
    const activity = await this.activitiesRepository.findById(activity_id);

    if (!activity) {
      throw new AppError('Activity does not exists');
    }

    if (activity.gymkhana_id) {
      const gymkhana = await this.gymkhanasRepository.findById(activity.gymkhana_id);

      if (gymkhana){
        activity.gymkhana = gymkhana;
      }
    }

    const activityResponses = await this.activityResponseRepository.findAllByActivity(activity.id);
    activity.options = activityResponses;

    return activity;
  }
}

export default ShowActivityService;
