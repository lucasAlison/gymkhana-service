import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IActivitiesRepository from '../repositories/IActivitiesRepository';
import Activity from '@modules/activities/infra/typeorm/entities/Activity';

interface IRequest {
  activity_id: string;
  name: string;
  note: string;
  type: string;
  token: string;
  latitude: number;
  longitude: number;
  radius: number;
  points: number;
  time: number;
}

@injectable()
class UpdateActivityService {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {}

  public async execute({
    activity_id,
    name,
    note,
    type,
    token,
    latitude,
    longitude,
    radius,
    points,
    time
  }: IRequest): Promise<Activity> {
    const activity = await this.activitiesRepository.findById(activity_id);

    if (!activity) {
      throw new AppError('Activity not found');
    }

    activity.name = name;
    activity.note = note;
    activity.type = type;
    activity.token = token;
    activity.latitude = latitude;
    activity.longitude = longitude;
    activity.radius = radius;
    activity.points = points;
    activity.time = time;

    return this.activitiesRepository.save(activity);
  }
}

export default UpdateActivityService;
