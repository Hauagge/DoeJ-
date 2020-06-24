import { Router } from 'express';
import appointmentsRouter from '@modules/appointments/Infra/http/routes/appointments.routes';
import userRouter from '@modules/users/Infra/http/routes/user.routes';
import sessionsRouter from '@modules/users/Infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
