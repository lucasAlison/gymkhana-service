import ICreateTeamDTO from "../dtos/ICreateTeamDTO";
import Team from "../infra/typeorm/entities/Team";

export default interface ITeamsRepository {
  create(data: ICreateTeamDTO): Promise<Team>;
  findByName(name: string): Promise<Team | undefined>;
  findAll(): Promise<Team[]>;
}
