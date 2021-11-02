import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Tip from '@modules/activities/infra/typeorm/entities/Tip';
import ITipsRepository from '../repositories/ITipsRepository';

interface IRequest {
  tip_id: string;
}

@injectable()
class ShowTipService {
  constructor(
    @inject('TipsRepository')
    private tipsRepository: ITipsRepository,
  ) {}

  public async execute({ tip_id }: IRequest): Promise<Tip> {
    const tip = await this.tipsRepository.findById(tip_id);

    if (!tip) {
      throw new AppError('Tip does not exists');
    }

   return tip;
  }
}

export default ShowTipService;
