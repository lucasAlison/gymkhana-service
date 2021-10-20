import IGymkhanasRepository from '@modules/gymkhanas/repositories/IGymkhanasRepository';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Activity from '@modules/activities/infra/typeorm/entities/Activity';
import IActivitiesRepository from '../repositories/IActivitiesRepository';

interface IRequest {
  id: string;
  gymkhana_id: string;
}

@injectable()
class LinkedActivityGymkhanaService {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
    @inject('GymkhanasRepository')
    private gymkhanasRepository: IGymkhanasRepository,
  ) {}

  public async execute({ id, gymkhana_id }: IRequest): Promise<Activity> {
    const activity = await this.activitiesRepository.findById(id);

    if (!activity) {
      throw new AppError('Activity does not exists');
    }

    const gymkhana = await this.gymkhanasRepository.findById(gymkhana_id);

    if (!gymkhana) {
      throw new AppError('Gymkhana does not exists');
    }

    activity.gymkhana_id = gymkhana_id;

    const activityResponse = await this.activitiesRepository.save(activity);

    return activityResponse;
  }
}

export default LinkedActivityGymkhanaService;
