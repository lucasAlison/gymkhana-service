import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TeamActivitiesController from '../controllers/TeamActivitiesController';

const teamActivitiesRouter = Router();
const teamActivitiesController = new TeamActivitiesController();

teamActivitiesRouter.use(ensureAuthenticated);

teamActivitiesRouter.post('/', teamActivitiesController.create);
teamActivitiesRouter.get('/', teamActivitiesController.index);
teamActivitiesRouter.get('/:team_activity_id', teamActivitiesController.show);
teamActivitiesRouter.put('/:team_activity_id', teamActivitiesController.update);
teamActivitiesRouter.delete('/:team_activity_id', teamActivitiesController.remove);


export default teamActivitiesRouter;
