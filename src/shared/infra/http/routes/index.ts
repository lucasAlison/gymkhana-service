import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRoutes from '@modules/users/infra/http/routes/sessions.routes';
import teamsRouter from '@modules/teams/infra/http/routes/teams.routes';
import gymkhanasRouter from '@modules/gymkhanas/infra/http/routes/gymkhanas.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRoutes);
routes.use('/teams', teamsRouter);
routes.use('/gymkhanas', gymkhanasRouter);

export default routes;
