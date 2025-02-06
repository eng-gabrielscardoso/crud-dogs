import { Plugin } from '@hapi/hapi';
import { createThingHandler } from './create-thing';
import { getThingHandler } from './get-thing';

export const routes: Plugin<{}> = {
  register: (server, options) => {
    server.route([
      {
        method: 'GET',
        path: '/{thingId}',
        options: {
          handler: getThingHandler,
          auth: {
            strategies: ['duAuth'],
            scope: ['myService:read:thing'],
          },
        },
      },
      {
        method: 'POST',
        path: '/',
        options: {
          handler: createThingHandler,
          auth: {
            strategies: ['duAuth'],
            scope: ['myService:write:thing'],
          },
        },
      },
    ]);
  },
  name: 'things',
};

export default routes;
