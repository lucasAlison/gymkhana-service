import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Gymkhana from '@modules/gymkhanas/infra/typeorm/entities/Gymkhana';
import IGymkhanasRepository from '../repositories/IGymkhanasRepository';

interface IRequest {
  code: string;
}

@injectable()
class ShowGymkhanaCodeService {
  constructor(
    @inject('GymkhanasRepository')
    private gymkhanasRepository: IGymkhanasRepository
  ) {}

  public async execute({ code }: IRequest): Promise<Gymkhana> {
    const gymkhana = await this.gymkhanasRepository.findByCode(code);

    if (!gymkhana) {
      throw new AppError('Gymkhana does not exists');
    }

    return gymkhana;
  }
}

export default ShowGymkhanaCodeService;
