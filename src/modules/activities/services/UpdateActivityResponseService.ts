import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IActivityResponsesRepository from '../repositories/IActivityResponsesRepository';
import ActivityResponse from '@modules/activities/infra/typeorm/entities/ActivityResponse';

interface IRequest {
  activity_response_id: string;
  note: string;
  correct: boolean;
  correction: string;
}

@injectable()
class UpdateActivityResponseService {
  constructor(
    @inject('ActivityResponsesRepository')
    private activityResponseRepository: IActivityResponsesRepository,
  ) {}

  public async execute({
    activity_response_id,
    note,
    correct,
    correction
  }: IRequest): Promise<ActivityResponse> {
    const activityResponse = await this.activityResponseRepository.findById(activity_response_id);

    if (!activityResponse) {
      throw new AppError('Activity response not found');
    }

    activityResponse.note = note;
    activityResponse.correct = correct;
    activityResponse.correction = correction;

    return this.activityResponseRepository.save(activityResponse);
  }
}

export default UpdateActivityResponseService;
