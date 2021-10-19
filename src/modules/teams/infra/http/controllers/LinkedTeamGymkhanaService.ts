import { Request, Response } from 'express';

import { container } from 'tsyringe';

import LinkedTeamGymkhanaService from '@modules/teams/services/LinkedTeamGymkhanaService';
import UnlinkedTeamGymkhanaService from '@modules/teams/services/UnlinkedTeamGymkhanaService';

export default class LinkedTeamGymkhanaController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { gymkhana_id } = request.body;

    const linkedTeamGymkhanaService = container.resolve(LinkedTeamGymkhanaService);

    const user = await linkedTeamGymkhanaService.execute({ id, gymkhana_id });

    return response.json(user);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const unlinkedTeamGymkhana = container.resolve(UnlinkedTeamGymkhanaService);

    const team = await unlinkedTeamGymkhana.execute({ id });

    return response.json(team);
  }

}
