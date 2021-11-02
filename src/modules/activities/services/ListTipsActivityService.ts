import { injectable, inject } from 'tsyringe';
import Tip from '@modules/activities/infra/typeorm/entities/Tip';
import ITipsRepository from '../repositories/ITipsRepository';

interface IRequest {
  activity_id: string;
}

@injectable()
class ListTipsActivityService {
  constructor(
    @inject('TipsRepository')
    private tipsRepository: ITipsRepository,
  ) {}

  public async execute({ activity_id }: IRequest): Promise<Tip[]> {
    const tips = await this.tipsRepository.findAllByActivity( activity_id );

    return tips;
  }
}

export default ListTipsActivityService;
