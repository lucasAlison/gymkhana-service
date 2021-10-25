import ICreateTeamActivityDTO from "../dtos/ICreateTeamActivityDTO";
import TeamActivities from "@modules/teams/infra/typeorm/entities/TeamActivity";

export default interface ITeamActivitiesRepository {
  create(data: ICreateTeamActivityDTO): Promise<TeamActivities>;
  findAll(): Promise<TeamActivities[]>;
  findById(id: string): Promise<TeamActivities | undefined>;
  save(teamActivities: TeamActivities): Promise<TeamActivities>;
  remove(teamActivities: TeamActivities): Promise<TeamActivities>;
  findAllByTeam(team_id: string): Promise<TeamActivities[]>;
}
