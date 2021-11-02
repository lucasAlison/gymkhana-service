import ListTipsActivityService from '@modules/activities/services/ListTipsActivityService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class TipActivityController {

  public async index(request: Request, response: Response): Promise<Response> {
    const { activity_id } = request.params;

    const listTips = container.resolve(ListTipsActivityService);

    const tips = await listTips.execute({ activity_id });

    return response.json(tips);
  }

}
