import { injectable, inject } from 'tsyringe';
import ActivityResponse from '@modules/activities/infra/typeorm/entities/ActivityResponse';
import IActivityResponsesRepository from '../repositories/IActivityResponsesRepository';


@injectable()
class IndexActivityResponseService {
  constructor(
    @inject('ActivityResponsesRepository')
    private activityResponseRepository: IActivityResponsesRepository,
  ) {}

  public async execute(): Promise<ActivityResponse[]> {
    const activityResponses = await this.activityResponseRepository.findAll();

    return activityResponses;
  }
}

export default IndexActivityResponseService;
