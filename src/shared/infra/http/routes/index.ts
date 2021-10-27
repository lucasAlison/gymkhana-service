import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRoutes from '@modules/users/infra/http/routes/sessions.routes';
import teamsRouter from '@modules/teams/infra/http/routes/teams.routes';
import gymkhanasRouter from '@modules/gymkhanas/infra/http/routes/gymkhanas.routes';
import activitiesRoutes from '@modules/activities/infra/http/routes/activities.routes';
import activityResponsesRoutes from '@modules/activities/infra/http/routes/activityResponses.routes';
import teamActivitiesRouter from '@modules/teams/infra/http/routes/teamActivities.routes';
import unityRouter from '@modules/unity/infra/http/routes/unity.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRoutes);
routes.use('/teams', teamsRouter);
routes.use('/gymkhanas', gymkhanasRouter);
routes.use('/activity/responses', activityResponsesRoutes);
routes.use('/activities', activitiesRoutes);
routes.use('/team/activities', teamActivitiesRouter);
routes.use('/unity', unityRouter);

export default routes;
