import ICreateTeamDTO from "../dtos/ICreateTeamDTO";
import Team from "@modules/teams/infra/typeorm/entities/Team";

export default interface ITeamsRepository {
  create(data: ICreateTeamDTO): Promise<Team>;
  findByName(name: string): Promise<Team | undefined>;
  findAll(): Promise<Team[]>;
  findById(id: string): Promise<Team | undefined>;
  save(team: Team): Promise<Team>;
  remove(team: Team): Promise<Team>;
  findAllByGymkhana(gymkhana_id: string): Promise<Team[]>;
}
