import KoaRouter from 'koa-router';
import { prefix } from 'config';

import { index } from '../controllers/ApiController';

const apiRoutes = new KoaRouter();

const apiRoutes = new KoaRouter({
    prefix: `${prefix}`,
});

apiRoutes.get('/', index);

export default apiRoutes;
