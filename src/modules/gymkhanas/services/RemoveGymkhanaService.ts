import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import IGymkhanasRepository from '../repositories/IGymkhanasRepository';


interface IRequest {
  gymkhana_id: string;
}

@injectable()
class RemoveGymkhanaService {
  constructor(
    @inject('GymkhanasRepository')
    private gymkhanasRepository: IGymkhanasRepository
  ) {}

  public async execute({ gymkhana_id }: IRequest): Promise<void> {
    const gymkhana = await this.gymkhanasRepository.findById(gymkhana_id);

    if (!gymkhana) {
      throw new AppError('Gymkhana does not exists');
    }

    await this.gymkhanasRepository.remove(gymkhana);
  }
}

export default RemoveGymkhanaService;
