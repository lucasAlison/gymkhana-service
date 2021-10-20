import ListActivityGymkhanaService from '@modules/activities/services/ListActivityGymkhanaService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class ActivityGymkhanaController {

  public async index(request: Request, response: Response): Promise<Response> {
    const { gymkhana_id } = request.params;

    const listActivities = container.resolve(ListActivityGymkhanaService);

    const activities = await listActivities.execute({ gymkhana_id });

    return response.json(activities);
  }

}
