import { Request, Response } from 'express';
import { container } from 'tsyringe';

import TipService from '@modules/unity/services/TipService';

export default class TipController {

  public async show(request: Request, response: Response): Promise<Response> {
    const { tip_id }  = request.params;

    const tipService = container.resolve(TipService);

    const tips = await tipService.execute({
      tip_id
    });

    return response.json(tips);
  }

}
