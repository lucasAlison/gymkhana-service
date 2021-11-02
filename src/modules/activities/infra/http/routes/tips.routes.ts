import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TipsController from '../controllers/TipsController';
import TipActivityController from '../controllers/TipActivityController';
import LinkedTipActivityController from '../controllers/LinkedTipActivityController';

const tipsRouter = Router();
const tipsController = new TipsController();
const tipActivityController = new TipActivityController();
const linkedTipActivityController = new LinkedTipActivityController();


tipsRouter.post('/', tipsController.create);
tipsRouter.get('/', tipsController.index);
tipsRouter.get('/:tip_id', tipsController.show);
tipsRouter.put('/:tip_id', tipsController.update);
tipsRouter.delete('/:tip_id', tipsController.remove);
tipsRouter.get('/activity/:activity_id', tipActivityController.index);
tipsRouter.post('/:id/activity', linkedTipActivityController.create);
tipsRouter.delete('/:id/activity', linkedTipActivityController.remove);

tipsRouter.use(ensureAuthenticated);
export default tipsRouter;
