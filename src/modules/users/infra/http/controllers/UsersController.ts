import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import IndexUserService from '@modules/users/services/IndexUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password } = request.body;
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({ name, username, email, password });

    return response.json({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexUser = container.resolve(IndexUserService);

    const users = await indexUser.execute();

    return response.json(users);
  }
}
