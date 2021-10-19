import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ActivitiesController from '../controllers/ActivitiesController';

const activitiesRouter = Router();
const activitiesController = new ActivitiesController;

activitiesRouter.use(ensureAuthenticated);

activitiesRouter.post('/', activitiesController.create);
activitiesRouter.get('/', activitiesController.index);
activitiesRouter.get('/:activity_id', activitiesController.show);
activitiesRouter.put('/:activity_id', activitiesController.update);
activitiesRouter.delete('/:activity_id', activitiesController.remove);

export default activitiesRouter;
