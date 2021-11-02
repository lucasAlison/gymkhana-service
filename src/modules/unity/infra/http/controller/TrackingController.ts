import { Request, Response } from 'express';
import { container } from 'tsyringe';

import TrackingService from '@modules/unity/services/TrackingService';

export default class TrackingController {

  public async show(request: Request, response: Response): Promise<Response> {
    const { activity_id }  = request.params;

    const trackingService = container.resolve(TrackingService);

    const trackings = await trackingService.execute({
      activity_id,
    });

    return response.json(trackings);
  }

}
