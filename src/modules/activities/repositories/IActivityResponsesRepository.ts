import ICreateActivityResponseDTO from "@modules/activities/dtos/ICreateActivityResponseDTO";
import ActivityResponse from "@modules/activities/infra/typeorm/entities/ActivityResponse";

export default interface IActivityResponsesRepository {
  create(data: ICreateActivityResponseDTO): Promise<ActivityResponse>;
  findAll(): Promise<ActivityResponse[]>;
  findById(id: string): Promise<ActivityResponse | undefined>;
  save(activityResponse: ActivityResponse): Promise<ActivityResponse>;
  remove(activityResponse: ActivityResponse): Promise<ActivityResponse>;
}
