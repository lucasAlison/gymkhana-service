import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class RemoveUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ user_id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    await this.usersRepository.remove(user);
  }
}

export default RemoveUserService;
