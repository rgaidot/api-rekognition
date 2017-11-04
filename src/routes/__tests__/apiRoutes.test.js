import config from 'config';
import request from 'supertest';
import { execSync } from 'child_process';

import server from '../../server';

describe('apiRoutes tests', () => {
    it('GET /', async () => {
        await request(server.listen())
            .get('/')
            .expect(404);
    });

    it('GET /v1', async () => {
        await request(server.listen())
            .get('/v1')
            .expect(200, {
                appName: config.appName,
                environment: 'test',
                version: config.version,
            });
    });
});
