import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateGymkhanaService from '@modules/gymkhanas/services/CreateGymkhanaService';
import IndexGymkhanaService from '@modules/gymkhanas/services/IndexGymkhanaService';
import UpdateGymkhanaService from '@modules/gymkhanas/services/UpdateGymkhanaService';
import ShowGymkhanaService from '@modules/gymkhanas/services/ShowGymkhanaService';
import RemoveGymkhanaService from '@modules/gymkhanas/services/RemoveGymkhanaService';

export default class GymkhanasController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { code, name, note, status } = request.body;
    const createGymkhana = container.resolve(CreateGymkhanaService);

    const gymkhana = await createGymkhana.execute({
      code,
      name,
      note,
      status
    });

    return response.json(gymkhana);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexGymkhana = container.resolve(IndexGymkhanaService);

    const gymkhanas = await indexGymkhana.execute();

    return response.json(gymkhanas);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { gymkhana_id }  = request.params;
    const { code, name, note, status } = request.body;

    const updateGymkhana = container.resolve(UpdateGymkhanaService);

    const gymkhana = await updateGymkhana.execute({
      gymkhana_id,
      code,
      name,
      note,
      status
    });

    return response.json(gymkhana);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { gymkhana_id }  = request.params;
    console.log('------------------');
    console.log(gymkhana_id);
    console.log('------------------');
    const showGymkhana = container.resolve(ShowGymkhanaService);

    const gymkhana = await showGymkhana.execute({
      gymkhana_id,
    });

    return response.json(gymkhana);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { gymkhana_id }  = request.params;

    const removeGymkhana = container.resolve(RemoveGymkhanaService);

    await removeGymkhana.execute({
      gymkhana_id,
    });

    return response.status(204).json();
  }
}
