import KoaRouter from 'koa-router';

import { post } from '../controllers/FaceDetectController';

const faceDetectRoutes = new KoaRouter();

faceDetectRoutes.post('/facedetect', post);

export default faceDetectRoutes;
