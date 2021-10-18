import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import IndexUserService from '@modules/users/services/IndexUserService';
import UpdateUserService from '@modules/users/services/UpdateUserService';
import ShowUserService from '@modules/users/services/ShowUserService';
import RemoveUserService from '@modules/users/services/RemoveUserService';

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

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, username, email, old_password, password } = request.body;

    const updateUser = container.resolve(UpdateUserService);

    const user = await updateUser.execute({
      user_id,
      name,
      username,
      email,
      old_password,
      password
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

  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showUser = container.resolve(ShowUserService);

    const user = await showUser.execute({
      user_id,
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

  public async remove(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const removeUser = container.resolve(RemoveUserService);

    await removeUser.execute({
      user_id,
    });

    return response.status(204).json();
  }

}
