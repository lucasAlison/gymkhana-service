import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.use(ensureAuthenticated);

// usersRouter.get('/', async (request, response) => {
//   const users = await usersRepository.find();

//   return response.json(users);
// });

usersRouter.post('/', usersController.create);

export default usersRouter;
