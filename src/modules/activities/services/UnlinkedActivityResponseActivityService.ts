import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import ActivityResponse from '@modules/activities/infra/typeorm/entities/ActivityResponse';
import IActivityResponsesRepository from '../repositories/IActivityResponsesRepository';


interface IRequest {
  id: string;
}

@injectable()
class UnlinkedActivityResponseActivityService {
  constructor(
    @inject('ActivityResponsesRepository')
    private activityResponsesRepository: IActivityResponsesRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<ActivityResponse> {
    var activityResponse = await this.activityResponsesRepository.findById(id);

    if (!activityResponse) {
      throw new AppError('Activity response does not exists');
    }

    activityResponse.activity_id = null;

    const activityR = await this.activityResponsesRepository.save(activityResponse);

    return activityR;
  }
}

export default UnlinkedActivityResponseActivityService;
