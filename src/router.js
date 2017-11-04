import KoaRouter from 'koa-router';

import apiRoutes from './routes/apiRoutes';
import faceDetectRoutes from './routes/faceDetectRoutes';

const router = new KoaRouter({
    prefix: apiRoutes.prefix,
});
router.use(faceDetectRoutes.middleware());
router.use(apiRoutes.middleware());

export default router;
