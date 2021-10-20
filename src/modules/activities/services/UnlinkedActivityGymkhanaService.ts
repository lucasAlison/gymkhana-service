import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Activity from '@modules/activities/infra/typeorm/entities/Activity';
import IActivitiesRepository from '../repositories/IActivitiesRepository';


interface IRequest {
  id: string;
}

@injectable()
class UnlinkedActivityGymkhanaService {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Activity> {
    var activity = await this.activitiesRepository.findById(id);

    if (!activity) {
      throw new AppError('Activity does not exists');
    }

    activity.gymkhana_id = null;

    const activityResponse = await this.activitiesRepository.save(activity);

    return activityResponse;
  }
}

export default UnlinkedActivityGymkhanaService;
