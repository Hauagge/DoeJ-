import { Router } from 'express';
import sessionsRouter from './sessions.routes';
import userRouter from './createUser.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
