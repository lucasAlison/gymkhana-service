import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import ActivityResponse from '@modules/activities/infra/typeorm/entities/ActivityResponse';
import IActivityResponsesRepository from '../repositories/IActivityResponsesRepository';

interface IRequest {
  activity_response_id: string;
}

@injectable()
class ShowActivityResponseService {
  constructor(
    @inject('ActivityResponsesRepository')
    private activityResponseRepository: IActivityResponsesRepository,
  ) {}

  public async execute({ activity_response_id }: IRequest): Promise<ActivityResponse> {
    const activityResponse = await this.activityResponseRepository.findById(activity_response_id);

    if (!activityResponse) {
      throw new AppError('Activity response does not exists');
    }

    return activityResponse;
  }
}

export default ShowActivityResponseService;
