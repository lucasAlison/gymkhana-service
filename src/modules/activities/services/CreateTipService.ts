import { injectable, inject } from 'tsyringe';

import Tip from '@modules/activities/infra/typeorm/entities/Tip';
import ITipsRepository from '../repositories/ITipsRepository';

interface IRequest {
  title: string;
  subtitle: string;
  body: string;
}

@injectable()
class CreateTipService {
  constructor(
    @inject('TipsRepository')
    private tipsRepository: ITipsRepository,
  ) {}

  public async execute({
    title,
    subtitle,
    body
  }: IRequest): Promise<Tip> {

    const tip = await this.tipsRepository.create({
      title,
      subtitle,
      body
    });

    return tip;
  }
}

export default CreateTipService;
