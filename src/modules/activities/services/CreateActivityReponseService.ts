import { injectable, inject } from 'tsyringe';

import IActivityResponsesRepository from '../repositories/IActivityResponsesRepository';
import ActivityResponse from '../infra/typeorm/entities/ActivityResponse';

interface IRequest {
  note: string;
  correct: boolean;
}

@injectable()
class CreateActivityResponseService {
  constructor(
    @inject('ActivityResponsesRepository')
    private activityResponsesRepository: IActivityResponsesRepository,
  ) {}

  public async execute({
    note,
    correct
  }: IRequest): Promise<ActivityResponse> {

    const activityResponse = await this.activityResponsesRepository.create({
      note,
      correct
    });

    return activityResponse;
  }
}

export default CreateActivityResponseService;
