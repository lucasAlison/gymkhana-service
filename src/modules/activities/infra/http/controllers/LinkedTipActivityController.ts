import LinkedTipActivityService from '@modules/activities/services/LinkedTipActivityService';
import UnlinkedTipActivityService from '@modules/activities/services/UnlinkedTipActivityService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class LinkedTipActivityController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { activity_id } = request.body;

    const linkedTipActivityService = container.resolve(LinkedTipActivityService);

    const tip = await linkedTipActivityService.execute({ id, activity_id });

    return response.json(tip);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const unlinkedTipActivityService = container.resolve(UnlinkedTipActivityService);

    const tip = await unlinkedTipActivityService.execute({ id });

    return response.json(tip);
  }

}
