import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';
import UsersTeamController from '../controllers/UsersTeamController';

const usersRouter = Router();
const usersController = new UsersController();
const usersTeamController = new UsersTeamController();

usersRouter.use(ensureAuthenticated);

usersRouter.post('/', usersController.create);
usersRouter.get('/', usersController.index);
usersRouter.get('/team/:team_id', usersTeamController.index);

export default usersRouter;
