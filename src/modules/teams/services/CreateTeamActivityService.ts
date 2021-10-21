import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ITeamActivitiesRepository from '../repositories/ITeamActivitiesRepository';
import TeamActivities from '../infra/typeorm/entities/TeamActivity';

interface IRequest {
  status: string;
  points: number;
  latitude: number;
  longitude: number;
  time: number;
}

@injectable()
class CreateTeamActivityService {
  constructor(
    @inject('TeamActivitiesRepository')
    private teamActivitiesRepository: ITeamActivitiesRepository,
  ) {}

  public async execute({
    status,
    points,
    latitude,
    longitude,
    time
  }: IRequest): Promise<TeamActivities> {
    const teamActivity = await this.teamActivitiesRepository.create({
      status,
      points,
      latitude,
      longitude,
      time
    });

    return teamActivity;
  }
}

export default CreateTeamActivityService;
