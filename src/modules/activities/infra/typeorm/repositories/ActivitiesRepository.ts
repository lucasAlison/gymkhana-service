import { getRepository, Repository } from 'typeorm';

import IActivitiesRepository from '@modules/activities/repositories/IActivitiesRepository';
import Activity from '@modules/activities/infra/typeorm/entities/Activity';
import ICreateActivityDTO from '@modules/activities/dtos/ICreateActivityDTO';

class ActivitiesRepository implements IActivitiesRepository {
  private ormRepository: Repository<Activity>;

  constructor() {
    this.ormRepository = getRepository(Activity);
  }

  public async create({
    name,
    note,
    type,
    token,
    latitude,
    longitude,
    radius,
    points,
    time
  }: ICreateActivityDTO): Promise<Activity> {
    const activity = this.ormRepository.create({
      name,
      note,
      type,
      token,
      latitude,
      longitude,
      radius,
      points,
      time
     });

    await this.ormRepository.save(activity);

    return activity;
  }

  public async findAll(): Promise<Activity[]> {
    const activitys = await this.ormRepository.find();

    return activitys;
  }

  public async findById(id: string): Promise<Activity | undefined> {
    const findActivity = await this.ormRepository.findOne(id);

    return findActivity;
  }

  public async save(activity: Activity): Promise<Activity> {
    return this.ormRepository.save(activity);
  }

  public async remove(activity: Activity): Promise<Activity> {
    return this.ormRepository.remove(activity);
  }
}

export default ActivitiesRepository;
