import { injectable, inject } from 'tsyringe';
import TeamActivities from '../infra/typeorm/entities/TeamActivity';
import ITeamActivitiesRepository from '../repositories/ITeamActivitiesRepository';


@injectable()
class IndexTeamActivitiesService {
  constructor(
    @inject('TeamActivitiesRepository')
    private teamActivitiesRepository: ITeamActivitiesRepository,
  ) {}

  public async execute(): Promise<TeamActivities[]> {
    const teamActivities = await this.teamActivitiesRepository.findAll();

    return teamActivities;
  }
}

export default IndexTeamActivitiesService;
