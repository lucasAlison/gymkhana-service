import { injectable, inject } from 'tsyringe';
import Activity from '@modules/activities/infra/typeorm/entities/Activity';
import IActivitiesRepository from '../repositories/IActivitiesRepository';

interface IRequest {
  gymkhana_id: string;
}

@injectable()
class ListActivityGymkhanaService {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {}

  public async execute({ gymkhana_id }: IRequest): Promise<Activity[]> {
    const activities = await this.activitiesRepository.findAllByGymkhana( gymkhana_id );

    return activities;
  }
}

export default ListActivityGymkhanaService;
