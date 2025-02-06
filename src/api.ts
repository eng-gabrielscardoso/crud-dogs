import Hapi from '@hapi/hapi';
import * as dotenv from 'dotenv-safe';
import { routes } from './routes';

dotenv.config();

const server = Hapi.server({
  port: process.env.PORT || 80,
});

(async () => {
  await routes(server);
  await server.start();
})();
