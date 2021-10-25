import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TeamActivitiesController from '../controllers/TeamActivitiesController';
import PerformTeamActivitiesController from '../controllers/PerformTeamActivitiesController';
import TeamActivitiesTeamController from '../controllers/TeamActivitiesTeamController';

const teamActivitiesRouter = Router();
const teamActivitiesController = new TeamActivitiesController();
const performTeamActivitiesController = new PerformTeamActivitiesController();
const teamActivitiesTeamController = new TeamActivitiesTeamController();


teamActivitiesRouter.post('/', teamActivitiesController.create);
teamActivitiesRouter.get('/', teamActivitiesController.index);
teamActivitiesRouter.get('/:team_activity_id', teamActivitiesController.show);
teamActivitiesRouter.put('/:team_activity_id', teamActivitiesController.update);
teamActivitiesRouter.delete('/:team_activity_id', teamActivitiesController.remove);
teamActivitiesRouter.post('/perform/:team_activity_id', performTeamActivitiesController.create);
teamActivitiesRouter.get('/team/:team_id', teamActivitiesTeamController.index);

teamActivitiesRouter.use(ensureAuthenticated);

export default teamActivitiesRouter;
