import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import ActivityResponse from '@modules/activities/infra/typeorm/entities/ActivityResponse';
import IActivitiesRepository from '../repositories/IActivitiesRepository';
import IActivityResponsesRepository from '../repositories/IActivityResponsesRepository';

interface IRequest {
  id: string;
  activity_id: string;
}

@injectable()
class LinkedActivityResponseActivity {
  constructor(
    @inject('ActivityResponsesRepository')
    private activityResponsesRepository: IActivityResponsesRepository,
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {}

  public async execute({ id, activity_id }: IRequest): Promise<ActivityResponse> {
    const activityResponse = await this.activityResponsesRepository.findById(id);

    if (!activityResponse) {
      throw new AppError('Activity response does not exists');
    }

    const activity = await this.activitiesRepository.findById(activity_id);

    if (!activity) {
      throw new AppError('Activity does not exists');
    }

    activityResponse.activity_id = activity_id;

    const activityR = await this.activityResponsesRepository.save(activityResponse);

    return activityR;
  }
}

export default LinkedActivityResponseActivity;
