import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import IActivityResponsesRepository from '../repositories/IActivityResponsesRepository';


interface IRequest {
  activity_response_id: string;
}

@injectable()
class RemoveActivityResponseervice {
  constructor(
    @inject('ActivityResponsesRepository')
    private activityResponseRepository: IActivityResponsesRepository,
  ) {}

  public async execute({ activity_response_id }: IRequest): Promise<void> {
    const activityResponse = await this.activityResponseRepository.findById(activity_response_id);

    if (!activityResponse) {
      throw new AppError('Activity response does not exists');
    }

    await this.activityResponseRepository.remove(activityResponse);
  }
}

export default RemoveActivityResponseervice;
