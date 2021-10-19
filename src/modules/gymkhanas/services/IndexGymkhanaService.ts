import { injectable, inject } from 'tsyringe';
import Gymkhana from '@modules/gymkhanas/infra/typeorm/entities/Gymkhana';
import IGymkhanasRepository from '../repositories/IGymkhanasRepository';


@injectable()
class IndexGymkhanaService {
  constructor(
    @inject('GymkhanasRepository')
    private gymkhanasRepository: IGymkhanasRepository
  ) {}

  public async execute(): Promise<Gymkhana[]> {
    const gymkhanas = await this.gymkhanasRepository.findAll();

    return gymkhanas;
  }
}

export default IndexGymkhanaService;
