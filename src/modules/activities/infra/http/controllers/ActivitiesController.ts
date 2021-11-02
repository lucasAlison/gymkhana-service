import CreateActivityService from '@modules/activities/services/CreateActivityService';
import IndexActivityService from '@modules/activities/services/IndexActivityService';
import RemoveActivityService from '@modules/activities/services/RemoveActivityService';
import ShowActivityService from '@modules/activities/services/ShowActivityService';
import UpdateActivityService from '@modules/activities/services/UpdateActivityService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class ActivitiesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      note,
      type,
      token,
      latitude,
      longitude,
      radius,
      points,
      time,
      typeTracking,
      urlTracking,
      assetNameTracking
    } = request.body;
    const createActivity = container.resolve(CreateActivityService);

    const activity = await createActivity.execute({
      name,
      note,
      type,
      token,
      latitude,
      longitude,
      radius,
      points,
      time,
      typeTracking,
      urlTracking,
      assetNameTracking
    });

    return response.json(activity);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexActivity = container.resolve(IndexActivityService);

    const activities = await indexActivity.execute();

    return response.json(activities);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { activity_id }  = request.params;
    const {
      name,
      note,
      type,
      token,
      latitude,
      longitude,
      radius,
      points,
      time,
      typeTracking,
      urlTracking,
      assetNameTracking
    } = request.body;

    const updateActivity = container.resolve(UpdateActivityService);

    const activity = await updateActivity.execute({
      activity_id,
      name,
      note,
      type,
      token,
      latitude,
      longitude,
      radius,
      points,
      time,
      typeTracking,
      urlTracking,
      assetNameTracking
    });

    return response.json(activity);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { activity_id }  = request.params;
    const showActivity = container.resolve(ShowActivityService);

    const activity = await showActivity.execute({
      activity_id,
    });

    return response.json(activity);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { activity_id }  = request.params;

    const removeActivity = container.resolve(RemoveActivityService);

    await removeActivity.execute({
      activity_id,
    });

    return response.status(204).json();
  }
}
