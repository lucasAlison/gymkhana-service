import ListActivityResponsesActivityService from '@modules/activities/services/ListActivityResponsesActivityService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class ActivityResponseActivityController {

  public async index(request: Request, response: Response): Promise<Response> {
    const { activity_id } = request.params;

    const listActivityResponses = container.resolve(ListActivityResponsesActivityService);

    const activityResponses = await listActivityResponses.execute({ activity_id });

    return response.json(activityResponses);
  }

}
