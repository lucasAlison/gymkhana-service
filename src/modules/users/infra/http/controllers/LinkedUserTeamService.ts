import { Request, Response } from 'express';

import { container } from 'tsyringe';

import LinkedUserTeamService from '@modules/users/services/LinkedUserTeamService';
import UnlinkedUserTeamService from '@modules/users/services/UnlinkedUserTeamService';

export default class LinkedUserTeamController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { team_id } = request.body;

    const linkedUserTeamService = container.resolve(LinkedUserTeamService);

    const user = await linkedUserTeamService.execute({ id, team_id });

    return response.json({
      id: user.id,
      name: user.name,
      username: user.username,
      team_id: user.team_id,
      team: user.team,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    });
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const unlinkedUserTeam = container.resolve(UnlinkedUserTeamService);

    const user = await unlinkedUserTeam.execute({ id });

    return response.json({
      id: user.id,
      name: user.name,
      username: user.username,
      team_id: user.team_id,
      team: user.team,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    });
  }

}
