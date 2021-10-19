import ICreateActivityDTO from "../dtos/ICreateActivityDTO";
import Activity from "@modules/activities/infra/typeorm/entities/Activity";

export default interface IActivitiesRepository {
  create(data: ICreateActivityDTO): Promise<Activity>;
  findAll(): Promise<Activity[]>;
  findById(id: string): Promise<Activity | undefined>;
  save(activity: Activity): Promise<Activity>;
  remove(activity: Activity): Promise<Activity>;
}
