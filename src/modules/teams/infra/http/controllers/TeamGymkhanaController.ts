import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListTeamGymkhanaService from '@modules/teams/services/ListTeamGymkhanaService';

export default class TeamGymkhanaController {

  public async index(request: Request, response: Response): Promise<Response> {
    const { gymkhana_id } = request.params;

    const listTeams = container.resolve(ListTeamGymkhanaService);

    const teams = await listTeams.execute({ gymkhana_id });

    return response.json(teams);
  }

}
