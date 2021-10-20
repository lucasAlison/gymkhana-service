import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ActivityResponsesController from '../controllers/ActivityResponsesController';
import ActivityResponseActivityController from '../controllers/ActivityResponseActivityController';
import LinkedActivityResponseActivityController from '../controllers/LinkedActivityResponseActivityController';

const activityResponsesRouter = Router();
const activityResponsesController = new ActivityResponsesController;
const activityResponseActivityController = new ActivityResponseActivityController();
const linkedActivityResponseActivityController = new LinkedActivityResponseActivityController();

activityResponsesRouter.use(ensureAuthenticated);

activityResponsesRouter.post('/', activityResponsesController.create);
activityResponsesRouter.get('/', activityResponsesController.index);
activityResponsesRouter.get('/:activity_response_id', activityResponsesController.show);
activityResponsesRouter.put('/:activity_response_id', activityResponsesController.update);
activityResponsesRouter.delete('/:activity_response_id', activityResponsesController.remove);
activityResponsesRouter.get('/activity/:activity_id', activityResponseActivityController.index);
activityResponsesRouter.post('/:id/activity', linkedActivityResponseActivityController.create);
activityResponsesRouter.delete('/:id/activity', linkedActivityResponseActivityController.remove);

export default activityResponsesRouter;
