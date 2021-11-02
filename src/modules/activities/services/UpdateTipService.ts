import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Tip from '@modules/activities/infra/typeorm/entities/Tip';
import ITipsRepository from '../repositories/ITipsRepository';

interface IRequest {
  tip_id: string;
  title: string;
  subtitle: string;
  body: string;
}

@injectable()
class UpdateTipService {
  constructor(
    @inject('TipsRepository')
    private tipsRepository: ITipsRepository,
  ) {}

  public async execute({
    tip_id,
    title,
    subtitle,
    body
  }: IRequest): Promise<Tip> {
    const tip = await this.tipsRepository.findById(tip_id);

    if (!tip) {
      throw new AppError('Tip not found');
    }

    tip.title = title;
    tip.subtitle = subtitle;
    tip.body = body;

    return this.tipsRepository.save(tip);
  }
}

export default UpdateTipService;
