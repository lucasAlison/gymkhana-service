import { Request, Response } from 'express';
import IndexTeamService from '@modules/teams/services/IndexTeamService';
import CreateTeamService from '@modules/teams/services/CreateTeamService';

import { container } from 'tsyringe';

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
}
