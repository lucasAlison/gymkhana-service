import ITipsRepository from '@modules/activities/repositories/ITipsRepository';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  tip_id: string;
}

@injectable()
class TipService {
  constructor(
    @inject('TipsRepository')
    private tipsRepository: ITipsRepository,
  ) {}

  public async execute({ tip_id }: IRequest): Promise<Object> {
    const tip = await this.tipsRepository.findById(tip_id);

    if (!tip) {
      throw new AppError('Tip does not exists');
    }

    const tips =
      {
        id: 0,
        title: tip.title,
        subtitle: tip.subtitle,
        body: tip.body
      };
    return tips;
  }
}

export default TipService;
