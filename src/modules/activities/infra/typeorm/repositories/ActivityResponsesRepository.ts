import { getRepository, Repository } from 'typeorm';

import IActivityResponsesRepository from '@modules/activities/repositories/IActivityResponsesRepository';
import ActivityResponse from '@modules/activities/infra/typeorm/entities/ActivityResponse';
import ICreateActivityResponseDTO from '@modules/activities/dtos/ICreateActivityResponseDTO';

class ActivityResponsesRepository implements IActivityResponsesRepository {
  private ormRepository: Repository<ActivityResponse>;

  constructor() {
    this.ormRepository = getRepository(ActivityResponse);
  }

  public async create({
    note,
    correct
  }: ICreateActivityResponseDTO): Promise<ActivityResponse> {
    const activityResponse = this.ormRepository.create({
      note,
      correct
     });

    await this.ormRepository.save(activityResponse);

    return activityResponse;
  }

  public async findAll(): Promise<ActivityResponse[]> {
    const activityResponse = await this.ormRepository.find();

    return activityResponse;
  }

  public async findById(id: string): Promise<ActivityResponse | undefined> {
    const findActivityResponse = await this.ormRepository.findOne(id);

    return findActivityResponse;
  }

  public async save(activityResponse: ActivityResponse): Promise<ActivityResponse> {
    return this.ormRepository.save(activityResponse);
  }

  public async remove(activityResponse: ActivityResponse): Promise<ActivityResponse> {
    return this.ormRepository.remove(activityResponse);
  }

  public async findAllByActivity(activity_id: string): Promise<ActivityResponse[]> {
    const activityResponses = await this.ormRepository.find({
      where: { activity_id },
    });

    return activityResponses;
  }

}

export default ActivityResponsesRepository;
