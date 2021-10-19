import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IGymkhanasRepository from '../repositories/IGymkhanasRepository';
import Gymkhana from '@modules/gymkhanas/infra/typeorm/entities/Gymkhana';

interface IRequest {
  code: string;
  name: string;
  note: string;
  status: string;
}

@injectable()
class CreateGymkhanaService {
  constructor(
    @inject('GymkhanasRepository')
    private gymkhanasRepository: IGymkhanasRepository,
  ) {}

  public async execute({
    code,
    name,
    note,
    status
  }: IRequest): Promise<Gymkhana> {
    const checkGymkhanaExists = await this.gymkhanasRepository.findByCode(code);

    if (checkGymkhanaExists) {
      throw new AppError('There is already a gymkhana with this code');
    }

    const gymkhana = await this.gymkhanasRepository.create({
      code,
      name,
      note,
      status
    });

    return gymkhana;
  }
}

export default CreateGymkhanaService;
