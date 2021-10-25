import ListTeamActivityByTeamService from '@modules/teams/services/ListTeamActivityByTeamService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class TeamActivitiesTeamController {

  public async index(request: Request, response: Response): Promise<Response> {
    const { team_id } = request.params;
    const listTeamActivityByTeam = container.resolve(ListTeamActivityByTeamService);

    const teamActivities = await listTeamActivityByTeam.execute({ team_id });

    return response.json(teamActivities);
  }

}
