import IActivitiesRepository from '@modules/activities/repositories/IActivitiesRepository';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  activity_id: string;
}

@injectable()
class TrackingService {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {}

  public async execute({ activity_id }: IRequest): Promise<Object> {
    const activity = await this.activitiesRepository.findById(activity_id);

    if (!activity) {
      throw new AppError('Activity does not exists');
    }

    const trackings =
      {
        id: 0,
        type: activity.type_tracking,
        url: activity.url_tracking,
        assetName: activity.asset_name_tracking
      };
    return trackings;
  }
}

export default TrackingService;
