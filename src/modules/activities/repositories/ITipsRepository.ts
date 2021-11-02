import Tip from "@modules/activities/infra/typeorm/entities/Tip";
import ICreateTipDTO from "../dtos/ICreateTipDTO";

export default interface ITipsRepository {
  create(data: ICreateTipDTO): Promise<Tip>;
  findAll(): Promise<Tip[]>;
  findById(id: string): Promise<Tip | undefined>;
  save(tip: Tip): Promise<Tip>;
  remove(tip: Tip): Promise<Tip>;
  findAllByActivity(activity_id: string): Promise<Tip[]>;
}
