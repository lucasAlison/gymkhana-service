import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListGymkhanaStatusService from '@modules/gymkhanas/services/ListGymkhanaStatusService';

export default class GymkhanaStatusController {

  public async index(request: Request, response: Response): Promise<Response> {
    const { status } = request.params;

    const listGymkhanas = container.resolve(ListGymkhanaStatusService);

    const gymkhanas = await listGymkhanas.execute({ status });

    return response.json(gymkhanas);
  }

}
