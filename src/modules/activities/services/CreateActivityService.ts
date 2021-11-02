import { injectable, inject } from 'tsyringe';

import IActivitiesRepository from '../repositories/IActivitiesRepository';
import Activity from '@modules/activities/infra/typeorm/entities/Activity';

interface IRequest {
  name: string;
  note: string;
  type: string;
  token: string;
  latitude: number;
  longitude: number;
  radius: number;
  points: number;
  time: number;
  typeTracking: string;
  urlTracking: string;
  assetNameTracking: string;
}

@injectable()
class CreateActivityService {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {}

  public async execute({
    name,
    note,
    type,
    token,
    latitude,
    longitude,
    radius,
    points,
    time,
    typeTracking,
    urlTracking,
    assetNameTracking
  }: IRequest): Promise<Activity> {

    const activity = await this.activitiesRepository.create({
      name,
      note,
      type,
      token,
      latitude,
      longitude,
      radius,
      points,
      time,
      typeTracking,
      urlTracking,
      assetNameTracking
    });

    return activity;
  }
}

export default CreateActivityService;
