import KoaRouter from 'koa-router';
import { prefix } from 'config';

import { post } from '../controllers/FaceDetectController';

const faceDetectRoutes = new KoaRouter({
    prefix: `${prefix}/facedetect`,
});

faceDetectRoutes.post('/', post);

export default faceDetectRoutes;
