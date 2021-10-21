import { getRepository, Repository } from 'typeorm';

import TeamActivities from '@modules/teams/infra/typeorm/entities/TeamActivity';
import ICreateTeamActivityDTO from '@modules/teams/dtos/ICreateTeamActivityDTO';
import ITeamActivitiesRepository from '@modules/teams/repositories/ITeamActivitiesRepository';

class TeamActivitiesRepository implements ITeamActivitiesRepository {
  private ormRepository: Repository<TeamActivities>;

  constructor() {
    this.ormRepository = getRepository(TeamActivities);
  }

  public async create({
    status,
    points,
    latitude,
    longitude,
    time
  }: ICreateTeamActivityDTO): Promise<TeamActivities> {
    const teamActivity = this.ormRepository.create({
      status,
      points,
      latitude,
      longitude,
      time
     });

    await this.ormRepository.save(teamActivity);

    return teamActivity;
  }

  public async findAll(): Promise<TeamActivities[]> {
    const teamActivities = await this.ormRepository.find();

    return teamActivities;
  }

  public async findById(id: string): Promise<TeamActivities | undefined> {
    const findTeamActivity = await this.ormRepository.findOne(id);

    return findTeamActivity;
  }

  public async save(teamActivity: TeamActivities): Promise<TeamActivities> {
    return this.ormRepository.save(teamActivity);
  }

  public async remove(teamActivity: TeamActivities): Promise<TeamActivities> {
    return this.ormRepository.remove(teamActivity);
  }

}

export default TeamActivitiesRepository;
