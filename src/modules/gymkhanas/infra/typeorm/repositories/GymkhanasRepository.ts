import { getRepository, Repository } from 'typeorm';

import IGymkhanasRepository from '@modules/gymkhanas/repositories/IGymkhanasRepository';
import Gymkhana from '@modules/gymkhanas/infra/typeorm/entities/Gymkhana';
import ICreateGymkhanaDTO from '@modules/gymkhanas/dtos/ICreateGymkhanaDTO';

class GymkhanasRepository implements IGymkhanasRepository {
  private ormRepository: Repository<Gymkhana>;

  constructor() {
    this.ormRepository = getRepository(Gymkhana);
  }

  public async findByName(name: string): Promise<Gymkhana | undefined> {
    const findGymkhana = await this.ormRepository.findOne({
      where: { name },
    });

    return findGymkhana;
  }

  public async findByCode(code: string): Promise<Gymkhana | undefined> {
    const findGymkhana = await this.ormRepository.findOne({
      where: { code },
    });

    return findGymkhana;
  }

  public async create({
    code,
    name,
    note,
    status
  }: ICreateGymkhanaDTO): Promise<Gymkhana> {
    const gymkhana = this.ormRepository.create({ code, name, note, status });

    await this.ormRepository.save(gymkhana);

    return gymkhana;
  }

  public async findAll(): Promise<Gymkhana[]> {
    const gymkhanas = await this.ormRepository.find();

    return gymkhanas;
  }

  public async findAllByStatus(status: string): Promise<Gymkhana[]> {
    const gymkhanas = await this.ormRepository.find({
      where: { status },
    });

    return gymkhanas;
  }

  public async findById(id: string): Promise<Gymkhana | undefined> {
    const findGymkhana = await this.ormRepository.findOne(id);

    return findGymkhana;
  }

  public async save(gymkhana: Gymkhana): Promise<Gymkhana> {
    return this.ormRepository.save(gymkhana);
  }

  public async remove(gymkhana: Gymkhana): Promise<Gymkhana> {
    return this.ormRepository.remove(gymkhana);
  }
}

export default GymkhanasRepository;
