import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Tip from '@modules/activities/infra/typeorm/entities/Tip';
import IActivitiesRepository from '../repositories/IActivitiesRepository';
import ITipsRepository from '../repositories/ITipsRepository';

interface IRequest {
  id: string;
  activity_id: string;
}

@injectable()
class LinkedTipActivityService {
  constructor(
    @inject('TipsRepository')
    private tipsRepository: ITipsRepository,
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
  ) {}

  public async execute({ id, activity_id }: IRequest): Promise<Tip> {
    const tip = await this.tipsRepository.findById(id);

    if (!tip) {
      throw new AppError('Tip does not exists');
    }

    const activity = await this.activitiesRepository.findById(activity_id);

    if (!activity) {
      throw new AppError('Activity does not exists');
    }

    tip.activity_id = activity_id;

    const tipR = await this.tipsRepository.save(tip);

    return tipR;
  }
}

export default LinkedTipActivityService;
