import PerformTeamActivityService from '@modules/teams/services/PerformTeamActivityService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class PerformTeamActivitiesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { team_activity_id}  = request.params;
    const performTeamAcitivty = container.resolve(PerformTeamActivityService);

    const teamAcitivty = await performTeamAcitivty.execute({
      team_activity_id
     });

    return response.json(teamAcitivty);
  }
}
