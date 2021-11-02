import { getRepository, Repository } from 'typeorm';

import Tip from '@modules/activities/infra/typeorm/entities/Tip';
import ICreateTipDTO from '@modules/activities/dtos/ICreateTipDTO';
import ITipsRepository from '@modules/activities/repositories/ITipsRepository';

class TipsRepository implements ITipsRepository {
  private ormRepository: Repository<Tip>;

  constructor() {
    this.ormRepository = getRepository(Tip);
  }

  public async create({
    title,
    subtitle,
    body
  }: ICreateTipDTO): Promise<Tip> {
    const tip = this.ormRepository.create({
      title,
      subtitle,
      body
     });

    await this.ormRepository.save(tip);

    return tip;
  }

  public async findAll(): Promise<Tip[]> {
    const tips = await this.ormRepository.find();

    return tips;
  }

  public async findById(id: string): Promise<Tip | undefined> {
    const findTip = await this.ormRepository.findOne(id);

    return findTip;
  }

  public async save(tip: Tip): Promise<Tip> {
    return this.ormRepository.save(tip);
  }

  public async remove(tip: Tip): Promise<Tip> {
    return this.ormRepository.remove(tip);
  }

  public async findAllByActivity(activity_id: string): Promise<Tip[]> {
    const tips = await this.ormRepository.find({
      where: { activity_id },
    });

    return tips;
  }

}

export default TipsRepository;
