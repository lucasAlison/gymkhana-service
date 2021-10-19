import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Activity from '@modules/activities/infra/typeorm/entities/Activity';
import IActivitiesRepository from '../repositories/IActivitiesRepository';

interface IRequest {
  activity_id: string;
}

@injectable()
class ShowActivityService {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {}

  public async execute({ activity_id }: IRequest): Promise<Activity> {
    const activity = await this.activitiesRepository.findById(activity_id);

    if (!activity) {
      throw new AppError('Activity does not exists');
    }

    return activity;
  }
}

export default ShowActivityService;
