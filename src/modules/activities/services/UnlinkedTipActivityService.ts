import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Tip from '@modules/activities/infra/typeorm/entities/Tip';
import ITipsRepository from '../repositories/ITipsRepository';


interface IRequest {
  id: string;
}

@injectable()
class UnlinkedTipActivityService {
  constructor(
    @inject('TipsRepository')
    private tipsRepository: ITipsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Tip> {
    var tip = await this.tipsRepository.findById(id);

    if (!tip) {
      throw new AppError('Tip does not exists');
    }

    tip.activity_id = null;

    const tipR = await this.tipsRepository.save(tip);

    return tipR;
  }
}

export default UnlinkedTipActivityService;
