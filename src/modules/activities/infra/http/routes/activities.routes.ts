import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ActivitiesController from '../controllers/ActivitiesController';
import ActivityGymkhanaController from '../controllers/ActivityGymkhanaController';
import LinkedActivityGymkhanaController from '../controllers/LinkedActivityGymkhanaController';

const activitiesRouter = Router();
const activitiesController = new ActivitiesController;
const activityGymkhanaController = new ActivityGymkhanaController();
const linkedActivityGymkhanaController = new LinkedActivityGymkhanaController();


activitiesRouter.post('/', activitiesController.create);
activitiesRouter.get('/', activitiesController.index);
activitiesRouter.get('/:activity_id', activitiesController.show);
activitiesRouter.put('/:activity_id', activitiesController.update);
activitiesRouter.delete('/:activity_id', activitiesController.remove);
activitiesRouter.get('/gymkhana/:gymkhana_id', activityGymkhanaController.index);
activitiesRouter.post('/:id/gymkhana', linkedActivityGymkhanaController.create);
activitiesRouter.delete('/:id/gymkhana', linkedActivityGymkhanaController.remove);

activitiesRouter.use(ensureAuthenticated);
export default activitiesRouter;
