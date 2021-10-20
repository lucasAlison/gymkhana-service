import { injectable, inject } from 'tsyringe';
import ActivityResponse from '@modules/activities/infra/typeorm/entities/ActivityResponse';
import IActivityResponsesRepository from '../repositories/IActivityResponsesRepository';

interface IRequest {
  activity_id: string;
}

@injectable()
class ListActivityResponsesActivityService {
  constructor(
    @inject('ActivityResponsesRepository')
    private activityResponsesRepository: IActivityResponsesRepository,
  ) {}

  public async execute({ activity_id }: IRequest): Promise<ActivityResponse[]> {
    const activityResponses = await this.activityResponsesRepository.findAllByActivity( activity_id );

    return activityResponses;
  }
}

export default ListActivityResponsesActivityService;
