import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import LevelController from '../controller/LevelController';
import QuestionController from '../controller/QuestionController';
import TipController from '../controller/TipController';
import TrackingController from '../controller/TrackingController';


const unityRouter = Router();
const levelController = new LevelController();
const questionController = new QuestionController();
const tipController = new TipController();
const trackingController = new TrackingController();

unityRouter.get('/level/:team_activity_id', levelController.index);
unityRouter.get('/question/:activity_id', questionController.show);
unityRouter.get('/tip/:tip_id', tipController.show);
unityRouter.get('/tracking/:activity_id', trackingController.show);

unityRouter.use(ensureAuthenticated);
export default unityRouter;
