import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import ActivityResponse from '@modules/activities/infra/typeorm/entities/ActivityResponse';
import IActivityResponsesRepository from '../repositories/IActivityResponsesRepository';
import IActivitiesRepository from '../repositories/IActivitiesRepository';

interface IRequest {
  activity_response_id: string;
}

@injectable()
class ShowActivityResponseService {
  constructor(
    @inject('ActivityResponsesRepository')
    private activityResponseRepository: IActivityResponsesRepository,
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {}

  public async execute({ activity_response_id }: IRequest): Promise<ActivityResponse> {
    const activityResponse = await this.activityResponseRepository.findById(activity_response_id);

    if (!activityResponse) {
      throw new AppError('Activity response does not exists');
    }

    if (activityResponse.activity_id) {
      const activity = await this.activitiesRepository.findById(activityResponse.activity_id);

      if (activity){
        activityResponse.activity = activity;
      }
    }

    return activityResponse;
  }
}

export default ShowActivityResponseService;
