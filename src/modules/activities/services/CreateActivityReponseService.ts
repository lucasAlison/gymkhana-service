import { injectable, inject } from 'tsyringe';

import IActivityResponsesRepository from '../repositories/IActivityResponsesRepository';
import ActivityResponse from '../infra/typeorm/entities/ActivityResponse';

interface IRequest {
  note: string;
  correct: boolean;
  correction: string;
}

@injectable()
class CreateActivityResponseService {
  constructor(
    @inject('ActivityResponsesRepository')
    private activityResponsesRepository: IActivityResponsesRepository,
  ) {}

  public async execute({
    note,
    correct,
    correction
  }: IRequest): Promise<ActivityResponse> {

    const activityResponse = await this.activityResponsesRepository.create({
      note,
      correct,
      correction
    });

    return activityResponse;
  }
}

export default CreateActivityResponseService;
