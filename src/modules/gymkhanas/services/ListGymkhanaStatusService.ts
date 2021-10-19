import { injectable, inject } from 'tsyringe';
import Gymkhana from '@modules/gymkhanas/infra/typeorm/entities/Gymkhana';
import IGymkhanasRepository from '../repositories/IGymkhanasRepository';

interface IRequest {
  status: string;
}

@injectable()
class ListGymkhanaStatusService {
  constructor(
    @inject('GymkhanasRepository')
    private gymkhanasRepository: IGymkhanasRepository
  ) {}

  public async execute({ status }: IRequest): Promise<Gymkhana[]> {
    const gymkhanas = await this.gymkhanasRepository.findAllByStatus( status );

    return gymkhanas;
  }
}

export default ListGymkhanaStatusService;
