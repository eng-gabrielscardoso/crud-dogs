import { Server } from '@hapi/hapi';
import { establishMongoConnection } from '@/util/mongo';
import { createDogHandler } from './create-dog';

const server = new Server();

beforeAll(async () => {
  await establishMongoConnection();

  server.route({
    method: 'POST',
    path: '/',
    options: {
      handler: createDogHandler,
    },
  });

  await server.start();
});

describe('createDogHandler', () => {
  it('Responds with an id', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/',
      payload: {
        name: 'Ghost',
        breed: 'Direwolf',
        color: 'White',
        weight: 100,
      },
    });
    expect(JSON.parse(res.payload)).toHaveProperty('name');
    expect(JSON.parse(res.payload)).toHaveProperty('breed');
    expect(JSON.parse(res.payload)).toHaveProperty('color');
    expect(JSON.parse(res.payload)).toHaveProperty('weight');
    expect(JSON.parse(res.payload).name).toBe('Ghost');
    expect(JSON.parse(res.payload).breed).toBe('Direwolf');
    expect(JSON.parse(res.payload).color).toBe('White');
    expect(JSON.parse(res.payload).weight).toBe(100);
  });
});

afterAll(async () => {
  await server.stop();
});
