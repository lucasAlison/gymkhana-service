import { Request, Response } from 'express';
import { container } from 'tsyringe';

import TipService from '@modules/unity/services/TipService';

export default class TipController {

  public async index(request: Request, response: Response): Promise<Response> {
    const tipService = container.resolve(TipService);

    const tips = await tipService.execute();

    return response.json(tips);
  }

}
