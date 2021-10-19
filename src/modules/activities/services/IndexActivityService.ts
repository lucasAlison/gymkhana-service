import { injectable, inject } from 'tsyringe';
import IActivitiesRepository from '../repositories/IActivitiesRepository';
import Activity from '@modules/activities/infra/typeorm/entities/Activity';


@injectable()
class IndexActivityService {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {}

  public async execute(): Promise<Activity[]> {
    const activities = await this.activitiesRepository.findAll();

    return activities;
  }
}

export default IndexActivityService;
