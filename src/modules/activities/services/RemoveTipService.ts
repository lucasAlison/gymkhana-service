import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import ITipsRepository from '../repositories/ITipsRepository';


interface IRequest {
  tip_id: string;
}

@injectable()
class RemoveTipService {
  constructor(
    @inject('TipsRepository')
    private tipsRepository: ITipsRepository,
  ) {}

  public async execute({ tip_id }: IRequest): Promise<void> {
    const tip = await this.tipsRepository.findById(tip_id);

    if (!tip) {
      throw new AppError('Tip does not exists');
    }

    await this.tipsRepository.remove(tip);
  }
}

export default RemoveTipService;
