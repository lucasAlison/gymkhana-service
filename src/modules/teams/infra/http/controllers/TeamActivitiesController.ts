import CreateTeamActivityService from '@modules/teams/services/CreateTeamActivityService';
import IndexTeamActivitiesService from '@modules/teams/services/IndexTeamActivitiesService';
import RemoveTeamActivityService from '@modules/teams/services/RemoveTeamActivityService';
import ShowTeamActivityService from '@modules/teams/services/ShowTeamActivityService';
import UpdateTeamActivityService from '@modules/teams/services/UpdateTeamActivityService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class TeamActivitiesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      status,
      points,
      latitude,
      longitude,
      time
    } = request.body;
    const createTeamAcitivty = container.resolve(CreateTeamActivityService);

    const teamAcitivty = await createTeamAcitivty.execute({
      status,
      points,
      latitude,
      longitude,
      time
     });

    return response.json(teamAcitivty);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexTeamActivity = container.resolve(IndexTeamActivitiesService);

    const teamActivities = await indexTeamActivity.execute();

    return response.json(teamActivities);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { team_activity_id}  = request.params;
    const {
      status,
      points,
      latitude,
      longitude,
      time
     } = request.body;

    const updateTeamActivity = container.resolve(UpdateTeamActivityService);

    const teamActivity = await updateTeamActivity.execute({
      team_activity_id,
      status,
      points,
      latitude,
      longitude,
      time
    });

    return response.json(teamActivity);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { team_activity_id }  = request.params;

    const showTeamActivity = container.resolve(ShowTeamActivityService);

    const teamActivity = await showTeamActivity.execute({
      team_activity_id,
    });

    return response.json(teamActivity);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { team_activity_id }  = request.params;

    const removeTeamActivity = container.resolve(RemoveTeamActivityService);

    await removeTeamActivity.execute({
      team_activity_id,
    });

    return response.status(204).json();
  }
}
