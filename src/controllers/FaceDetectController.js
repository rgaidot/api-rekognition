import asyncBusboy from 'async-busboy';
import config from 'config';
import chalk from 'chalk';
import fs from 'fs';
import AWS from 'aws-sdk';
import winston from 'winston';

export const post = async ctx => {
    const { request: { body: { picture } } } = ctx;
    var base64data = new Buffer(picture.replace(/^data:image\/\w+;base64,/, ''), 'base64');

    const rekognition = new AWS.Rekognition();

    const body = await new Promise((resolve, reject) => {
        rekognition.detectFaces({ Image: { Bytes: base64data }, Attributes: ['ALL'] }, function(
            error,
            response,
        ) {
            if (error) {
                winston.info(
                    `${chalk.black.bgRed.bold('detectFaces: nok')}: ${JSON.stringify(error)}`,
                );
                reject(error);
            } else {
                winston.info(
                    `${chalk.black.bgGreen.bold('detectFaces: ok')}: ${JSON.stringify(response)}`,
                );
                resolve(response);
            }
        });
    });
    ctx.body = { body, picture: base64data };
    ctx.status = 200;
};
