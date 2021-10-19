import ICreateGymkhanaDTO from "../dtos/ICreateGymkhanaDTO";
import Gymkhana from "../infra/typeorm/entities/Gymkhana";

export default interface IGymkhanasRepository {
  create(data: ICreateGymkhanaDTO): Promise<Gymkhana>;
  findByCode(code: string): Promise<Gymkhana | undefined>;
  findByName(name: string): Promise<Gymkhana | undefined>;
  findAll(): Promise<Gymkhana[]>;
  findAllByStatus(status: string): Promise<Gymkhana[]>;
  findById(id: string): Promise<Gymkhana | undefined>;
  save(team: Gymkhana): Promise<Gymkhana>;
  remove(team: Gymkhana): Promise<Gymkhana>;
}
