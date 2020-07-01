import { Router } from 'express';

import user from './createUser.routes';
import sessions from './sessions.routes';

const routes = Router();

routes.use('/user', user);
routes.use('/sessions', sessions);

export default routes;
