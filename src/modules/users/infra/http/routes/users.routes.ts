import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';
import UserTeamController from '../controllers/UserTeamController';
import LinkedUserTeamController from '../controllers/LinkedUserTeamService';
import UserEmailController from '../controllers/UserEmailController';

const usersRouter = Router();
const usersController = new UsersController();
const userTeamController = new UserTeamController();
const linkedUserTeamController = new LinkedUserTeamController();
const userEmailController = new UserEmailController();

usersRouter.get('/email/:email', userEmailController.show);
usersRouter.post('/', usersController.create);


usersRouter.get('/', usersController.show);
usersRouter.get('/list', usersController.index);
usersRouter.get('/team/:team_id', userTeamController.index);
usersRouter.post('/:id/team', linkedUserTeamController.create);
usersRouter.delete('/:id/team', linkedUserTeamController.remove);
usersRouter.put('/', usersController.update);
usersRouter.delete('/:user_id', usersController.remove);

usersRouter.use(ensureAuthenticated);
export default usersRouter;
