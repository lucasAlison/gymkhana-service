import { injectable, inject } from 'tsyringe';
import Tip from '@modules/activities/infra/typeorm/entities/Tip';
import ITipsRepository from '../repositories/ITipsRepository';


@injectable()
class IndexTipService {
  constructor(
    @inject('TipsRepository')
    private tipsRepository: ITipsRepository,
  ) {}

  public async execute(): Promise<Tip[]> {
    const tips = await this.tipsRepository.findAll();

    return tips;
  }
}

export default IndexTipService;
