import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import GymkhanasController from '../controllers/GymkhanasController';
import GymkhanaCodeController from '../controllers/GymkhanaCodeController';
import GymkhanaStatusController from '../controllers/GymkhanaStatusController';

const gymkhanasRouter = Router();
const gymkhanasController = new GymkhanasController;
const gymkhanaCodeController = new GymkhanaCodeController;
const gymkhanaStatusController = new GymkhanaStatusController;

gymkhanasRouter.use(ensureAuthenticated);

gymkhanasRouter.post('/', gymkhanasController.create);
gymkhanasRouter.get('/', gymkhanasController.index);
gymkhanasRouter.get('/status/:status', gymkhanaStatusController.index);
gymkhanasRouter.get('/:gymkhana_id', gymkhanasController.show);
gymkhanasRouter.get('/code/:code', gymkhanaCodeController.show);
gymkhanasRouter.put('/:gymkhana_id', gymkhanasController.update);
gymkhanasRouter.delete('/:gymkhana_id', gymkhanasController.remove);

export default gymkhanasRouter;
