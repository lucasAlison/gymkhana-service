import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TeamActivitiesController from '../controllers/TeamActivitiesController';
import PerformTeamActivitiesController from '../controllers/PerformTeamActivitiesController';

const teamActivitiesRouter = Router();
const teamActivitiesController = new TeamActivitiesController();
const performTeamActivitiesController = new PerformTeamActivitiesController();

teamActivitiesRouter.use(ensureAuthenticated);

teamActivitiesRouter.post('/', teamActivitiesController.create);
teamActivitiesRouter.get('/', teamActivitiesController.index);
teamActivitiesRouter.get('/:team_activity_id', teamActivitiesController.show);
teamActivitiesRouter.put('/:team_activity_id', teamActivitiesController.update);
teamActivitiesRouter.delete('/:team_activity_id', teamActivitiesController.remove);
teamActivitiesRouter.post('/perform/:team_activity_id', performTeamActivitiesController.create);


export default teamActivitiesRouter;
