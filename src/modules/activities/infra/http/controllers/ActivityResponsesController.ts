import CreateActivityResponseService from '@modules/activities/services/CreateActivityReponseService';
import IndexActivityResponseService from '@modules/activities/services/IndexActivityResponseService';
import RemoveActivityResponseervice from '@modules/activities/services/RemoveActivityResponseService';
import ShowActivityResponseService from '@modules/activities/services/ShowActivityResponseService';
import UpdateActivityResponseService from '@modules/activities/services/UpdateActivityResponseService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class ActivityResponsesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      note,
      correct,
      correction
    } = request.body;
    const createActivityResponse = container.resolve(CreateActivityResponseService);

    const activityResponse = await createActivityResponse.execute({
      note,
      correct,
      correction
    });

    return response.json(activityResponse);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexActivityResponse = container.resolve(IndexActivityResponseService);

    const activityResponses = await indexActivityResponse.execute();

    return response.json(activityResponses);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { activity_response_id }  = request.params;
    const {
      note,
      correct,
      correction
    } = request.body;

    const updateActivityResponse = container.resolve(UpdateActivityResponseService);

    const activityResponse = await updateActivityResponse.execute({
      activity_response_id,
      note,
      correct,
      correction
    });

    return response.json(activityResponse);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { activity_response_id }  = request.params;
    const showActivityResponse = container.resolve(ShowActivityResponseService);

    const activityResponse = await showActivityResponse.execute({
      activity_response_id,
    });

    return response.json(activityResponse);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { activity_response_id }  = request.params;

    const removeActivityResponse = container.resolve(RemoveActivityResponseervice);

    await removeActivityResponse.execute({
      activity_response_id,
    });

    return response.status(204).json();
  }
}
