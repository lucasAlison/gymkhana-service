import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TeamsController from '../controllers/TeamsController';

const teamsRouter = Router();
const teamsController = new TeamsController();

teamsRouter.use(ensureAuthenticated);

teamsRouter.post('/', teamsController.create);
teamsRouter.get('/', teamsController.index);

export default teamsRouter;
