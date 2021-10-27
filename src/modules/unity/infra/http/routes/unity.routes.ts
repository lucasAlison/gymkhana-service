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

unityRouter.get('/levels', levelController.index);
unityRouter.get('/questions', questionController.index);
unityRouter.get('/tips', tipController.index);
unityRouter.get('/tracking', trackingController.index);

unityRouter.use(ensureAuthenticated);
export default unityRouter;
