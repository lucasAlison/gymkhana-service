import { Request, Response } from 'express';
import { container } from 'tsyringe';

import TrackingService from '@modules/unity/services/TrackingService';

export default class TrackingController {

  public async index(request: Request, response: Response): Promise<Response> {
    const trackingService = container.resolve(TrackingService);

    const trackings = await trackingService.execute();

    return response.json(trackings);
  }

}
