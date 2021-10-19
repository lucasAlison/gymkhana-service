import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TeamsController from '../controllers/TeamsController';
import TeamGymkhanaController from '../controllers/TeamGymkhanaController';
import LinkedTeamGymkhanaController from '../controllers/LinkedTeamGymkhanaService';

const teamsRouter = Router();
const teamsController = new TeamsController();
const teamGymkhanaController = new TeamGymkhanaController();
const linkedTeamGymkhanaController = new LinkedTeamGymkhanaController();

teamsRouter.use(ensureAuthenticated);

teamsRouter.post('/', teamsController.create);
teamsRouter.get('/', teamsController.index);
teamsRouter.get('/:team_id', teamsController.show);
teamsRouter.put('/:team_id', teamsController.update);
teamsRouter.delete('/:team_id', teamsController.remove);
teamsRouter.get('/gymkhana/:gymkhana_id', teamGymkhanaController.index);
teamsRouter.post('/:id/gymkhana', linkedTeamGymkhanaController.create);
teamsRouter.delete('/:id/gymkhana', linkedTeamGymkhanaController.remove);

export default teamsRouter;
