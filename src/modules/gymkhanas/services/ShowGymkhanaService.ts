import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Gymkhana from '@modules/gymkhanas/infra/typeorm/entities/Gymkhana';
import IGymkhanasRepository from '../repositories/IGymkhanasRepository';

interface IRequest {
  gymkhana_id: string;
}

@injectable()
class ShowGymkhanaService {
  constructor(
    @inject('GymkhanasRepository')
    private gymkhanasRepository: IGymkhanasRepository
  ) {}

  public async execute({ gymkhana_id }: IRequest): Promise<Gymkhana> {
    console.log(gymkhana_id);
    const gymkhana = await this.gymkhanasRepository.findById(gymkhana_id);

    if (!gymkhana) {
      throw new AppError('Gymkhana does not exists');
    }

    return gymkhana;
  }
}

export default ShowGymkhanaService;
