import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import IActivitiesRepository from '../repositories/IActivitiesRepository';


interface IRequest {
  activity_id: string;
}

@injectable()
class RemoveActivityService {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {}

  public async execute({ activity_id }: IRequest): Promise<void> {
    const activity = await this.activitiesRepository.findById(activity_id);

    if (!activity) {
      throw new AppError('Activity does not exists');
    }

    await this.activitiesRepository.remove(activity);
  }
}

export default RemoveActivityService;
