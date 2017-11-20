import request from 'supertest';
import { appName, version } from 'config';

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
                appName,
                environment: 'test',
                version,
            });
    });
});
