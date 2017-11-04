import KoaRouter from 'koa-router';
import config from 'config';

import { index } from '../controllers/ApiController';

const apiRoutes = new KoaRouter();

apiRoutes.prefix = config.prefix;

apiRoutes.get('/', index);

export default apiRoutes;
