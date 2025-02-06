import { Plugin } from '@hapi/hapi';
import { createDogHandler } from './create-dog';
import { getDogHandler } from './get-dog';

export const routes: Plugin<{}> = {
  register: (server, options) => {
    server.route([
      {
        method: 'GET',
        path: '/{dogId}',
        options: {
          handler: getDogHandler,
        },
      },
      {
        method: 'POST',
        path: '/',
        options: {
          handler: createDogHandler,
        },
      },
    ]);
  },
  name: 'dogs',
};

export default routes;
