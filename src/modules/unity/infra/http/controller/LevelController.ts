import { Request, Response } from 'express';
import { container } from 'tsyringe';

import LevelService from '@modules/unity/services/LevelService';

export default class LevelController {

  public async index(request: Request, response: Response): Promise<Response> {
    const { team_activity_id }  = request.params;

    const levelService = container.resolve(LevelService);

    const levels = await levelService.execute({
      team_activity_id,
    });

    return response.json(levels);
  }

}
