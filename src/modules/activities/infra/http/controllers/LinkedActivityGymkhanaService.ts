import LinkedActivityGymkhanaService from '@modules/activities/services/LinkedActivityGymkhanaService';
import UnlinkedActivityGymkhanaService from '@modules/activities/services/UnlinkedActivityGymkhanaService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class LinkedActivityGymkhanaController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { gymkhana_id } = request.body;

    const linkedActivityGymkhanaService = container.resolve(LinkedActivityGymkhanaService);

    const activity = await linkedActivityGymkhanaService.execute({ id, gymkhana_id });

    return response.json(activity);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const unlinkedActivityGymkhanaService = container.resolve(UnlinkedActivityGymkhanaService);

    const activity = await unlinkedActivityGymkhanaService.execute({ id });

    return response.json();
  }

}
