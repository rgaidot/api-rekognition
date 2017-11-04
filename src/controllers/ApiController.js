import config from 'config';

export const index = async ctx => {
    ctx.body = {
        appName: config.appName,
        environment: process.env.NODE_ENV || 'development',
        version: config.version,
    };

    ctx.status = 200;
};
