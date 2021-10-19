import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IGymkhanasRepository from '../repositories/IGymkhanasRepository';
import Gymkhana from '@modules/gymkhanas/infra/typeorm/entities/Gymkhana';

interface IRequest {
  gymkhana_id: string;
  code: string;
  name: string;
  note: string;
  status: string;
}

@injectable()
class UpdateGymkhanaService {
  constructor(
    @inject('GymkhanasRepository')
    private gymkhanasRepository: IGymkhanasRepository
  ) {}

  public async execute({
    gymkhana_id,
    code,
    name,
    note,
    status
  }: IRequest): Promise<Gymkhana> {
    const gymkhana = await this.gymkhanasRepository.findById(gymkhana_id);

    if (!gymkhana) {
      throw new AppError('Gymkhana not found');
    }

    const gymkhanaWithUpdatedCode =
    await this.gymkhanasRepository.findByCode(code);

    if (gymkhanaWithUpdatedCode && gymkhanaWithUpdatedCode.code !== code) {
      throw new AppError('Code already in use');
    }

    gymkhana.code = code;
    gymkhana.name = name;
    gymkhana.note = note;
    gymkhana.status = status

    return this.gymkhanasRepository.save(gymkhana);
  }
}

export default UpdateGymkhanaService;
