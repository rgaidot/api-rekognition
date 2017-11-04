import Koa from 'koa';

import cluster from 'cluster';
import os from 'os';

import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import cors from 'kcors';
import etag from 'koa-etag';
import chalk from 'chalk';
import winston from 'winston';

import config from 'config';

import rateLimit from './middlewares/rateLimit';
import v1 from './router';

import AWS from '../config/initializers/aws';

const app = new Koa()
    .use(cors())
    .use(compress())
    .use(etag())
    // .use(rateLimit)
    .use(bodyParser({ formLimit: config.request.sizeLimit }))
    .use(v1.middleware());

const main = async () => {
    if (cluster.isMaster && process.env.NODE_ENV === 'production') {
        os.cpus().forEach(() => cluster.fork());

        cluster.on('online', worker => winston.info(`Worker ${worker.process.pid} online.`));
        cluster.on('message', message => winston.info(message));
        cluster.on('exit', (worker, signal) => {
            winston.info(`Worker ${worker.process.pid} died (signal: ${signal}). Restarting...`);
            cluster.fork();
        });
    } else {
        await app.listen(config.port, () =>
            winston.info(chalk.black.bgGreen.bold(`${config.appName} - ${config.version}`)),
        );
    }
};

main().catch(error => winston.error(error));

export default app;
