import { Request, Response } from 'express';
import IndexTeamService from '@modules/teams/services/IndexTeamService';
import CreateTeamService from '@modules/teams/services/CreateTeamService';

import { container } from 'tsyringe';
import UpdateTeamService from '@modules/teams/services/UpdateTeamService';
import ShowTeamService from '@modules/teams/services/ShowTeamService';
import RemoveTeamService from '@modules/teams/services/RemoveTeamService';

export default class TeamsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const createTeam = container.resolve(CreateTeamService);

    const team = await createTeam.execute({ name });

    return response.json(team);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexTeam = container.resolve(IndexTeamService);

    const teams = await indexTeam.execute();

    return response.json(teams);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { team_id}  = request.params;
    const { name } = request.body;

    const updateTeam = container.resolve(UpdateTeamService);

    const team = await updateTeam.execute({
      team_id,
      name
    });

    return response.json(team);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { team_id}  = request.params;

    const showTeam = container.resolve(ShowTeamService);

    const team = await showTeam.execute({
      team_id,
    });

    return response.json(team);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { team_id}  = request.params;

    const removeTeam = container.resolve(RemoveTeamService);

    await removeTeam.execute({
      team_id,
    });

    return response.status(204).json();
  }
}
