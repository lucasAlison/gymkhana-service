import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUser.execute({
      username,
      password,
    });

    const userResponse = {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return response.json({
      user: userResponse,
      token,
    });
  }
}
