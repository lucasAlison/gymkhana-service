import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ActivityResponsesController from '../controllers/ActivityResponsesController';

const activityResponsesRouter = Router();
const activityResponsesController = new ActivityResponsesController;

activityResponsesRouter.use(ensureAuthenticated);

activityResponsesRouter.post('/', activityResponsesController.create);
activityResponsesRouter.get('/', activityResponsesController.index);
activityResponsesRouter.get('/:activity_response_id', activityResponsesController.show);
activityResponsesRouter.put('/:activity_response_id', activityResponsesController.update);
activityResponsesRouter.delete('/:activity_response_id', activityResponsesController.remove);

export default activityResponsesRouter;
