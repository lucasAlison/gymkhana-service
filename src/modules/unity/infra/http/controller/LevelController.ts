import { Request, Response } from 'express';
import { container } from 'tsyringe';

import LevelService from '@modules/unity/services/LevelService';

export default class LevelController {

  public async index(request: Request, response: Response): Promise<Response> {
    const levelService = container.resolve(LevelService);

    const levels = await levelService.execute();

    return response.json(levels);
  }

}
