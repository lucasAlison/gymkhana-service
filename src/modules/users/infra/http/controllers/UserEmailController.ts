import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ShowUserEmailService from '@modules/users/services/ShowUserEmailService';

export default class UserEmailController {

  public async show(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    const showUser = container.resolve(ShowUserEmailService);

    const user = await showUser.execute({
      email,
    });

    return response.json({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      team_id: user.team_id,
      team: user.team,
      created_at: user.created_at,
      updated_at: user.updated_at,
    });
  }

}
