import LinkedActivityResponseActivityService from '@modules/activities/services/LinkedActivityResponseActivityService';
import UnlinkedActivityResponseActivityService from '@modules/activities/services/UnlinkedActivityResponseActivityService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class LinkedActivityResponseActivityController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { activity_id } = request.body;

    const linkedActivityResponseActivityService = container.resolve(LinkedActivityResponseActivityService);

    const activityResponse = await linkedActivityResponseActivityService.execute({ id, activity_id });

    return response.json(activityResponse);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const unlinkedActivityResponseActivityService = container.resolve(UnlinkedActivityResponseActivityService);

    const activityResponse = await unlinkedActivityResponseActivityService.execute({ id });

    return response.json(activityResponse);
  }

}
