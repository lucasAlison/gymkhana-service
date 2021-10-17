import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListUserTeamService from '@modules/users/services/ListUserTeamService';

export default class UsersTeamController {

  public async index(request: Request, response: Response): Promise<Response> {
    const { team_id } = request.params;

    const listUsers = container.resolve(ListUserTeamService);

    const users = await listUsers.execute({ team_id });

    return response.json(users);
  }

}
