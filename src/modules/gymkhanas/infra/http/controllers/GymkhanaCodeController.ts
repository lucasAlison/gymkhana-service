import { Request, Response } from 'express';

import { container } from 'tsyringe';
import ShowGymkhanaCodeService from '@modules/gymkhanas/services/ShowGymkhanaCodeService';

export default class GymkhanaCodeController {

  public async show(request: Request, response: Response): Promise<Response> {
    const { code }  = request.params;

    const showGymkhana = container.resolve(ShowGymkhanaCodeService);

    const gymkhana = await showGymkhana.execute({
      code,
    });

    return response.json(gymkhana);
  }

}
