import CreateTipService from '@modules/activities/services/CreateTipService';
import IndexTipService from '@modules/activities/services/IndexTipService';
import RemoveTipService from '@modules/activities/services/RemoveTipService';
import ShowTipService from '@modules/activities/services/ShowTipService';
import UpdateTipService from '@modules/activities/services/UpdateTipService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class TipsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      title,
      subtitle,
      body
    } = request.body;
    const createTip = container.resolve(CreateTipService);

    const tip = await createTip.execute({
      title,
      subtitle,
      body
    });

    return response.json(tip);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexTip = container.resolve(IndexTipService);

    const tips = await indexTip.execute();

    return response.json(tips);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { tip_id }  = request.params;
    const {
      title,
      subtitle,
      body
    } = request.body;

    const updateTip = container.resolve(UpdateTipService);

    const tip = await updateTip.execute({
      tip_id,
      title,
      subtitle,
      body
    });

    return response.json(tip);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { tip_id }  = request.params;
    const showTip = container.resolve(ShowTipService);

    const tip = await showTip.execute({
      tip_id,
    });

    return response.json(tip);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { tip_id }  = request.params;

    const removeTip = container.resolve(RemoveTipService);

    await removeTip.execute({
      tip_id,
    });

    return response.status(204).json();
  }
}
