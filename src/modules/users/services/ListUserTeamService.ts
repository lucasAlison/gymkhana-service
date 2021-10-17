import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  team_id: string;
}

@injectable()
class ListUserTeamService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ team_id }: IRequest): Promise<Object[]> {
    const users = await this.usersRepository.findAllByTeam( team_id );

    const usersResponse = users.map(user => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        team_id: user.team_id,
        team: user.team,
        created_at: user.created_at,
        updated_ad: user.updated_at
      };
    });

    return usersResponse;
  }
}

export default ListUserTeamService;
