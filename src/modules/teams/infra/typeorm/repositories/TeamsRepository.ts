import { getRepository, Repository } from 'typeorm';

import ITeamsRepository from '@modules/teams/repositories/ITeamsRepository';
import Team from '@modules/teams/infra/typeorm/entities/Team';
import ICreateTeamDTO from '@modules/teams/dtos/ICreateTeamDTO';

class TeamsRepository implements ITeamsRepository {
  private ormRepository: Repository<Team>;

  constructor() {
    this.ormRepository = getRepository(Team);
  }

  public async findByName(name: string): Promise<Team | undefined> {
    const findTeam = await this.ormRepository.findOne({
      where: { name },
    });

    return findTeam;
  }

  public async create({
    name
  }: ICreateTeamDTO): Promise<Team> {
    const team = this.ormRepository.create({ name });

    await this.ormRepository.save(team);

    return team;
  }

  public async findAll(): Promise<Team[]> {
    const teams = await this.ormRepository.find();

    return teams;
  }

  public async findById(id: string): Promise<Team | undefined> {
    const findTeam = await this.ormRepository.findOne(id);

    return findTeam;
  }

  public async save(team: Team): Promise<Team> {
    return this.ormRepository.save(team);
  }

  public async remove(team: Team): Promise<Team> {
    return this.ormRepository.remove(team);
  }

  public async findAllByGymkhana(gymkhana_id: string): Promise<Team[]> {
    const teams = await this.ormRepository.find({
      where: { gymkhana_id },
    });

    return teams;
  }
}

export default TeamsRepository;
