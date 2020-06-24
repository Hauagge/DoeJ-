import { Router } from 'express';

import ensureAuthenticated from '@modules/users/Infra/http/middlewares/ensureAuthenticated';
import AppointmentController from '../Controllers/AppointmentController';

const appointmentsRouter = Router();

const appointtmentsController = new AppointmentController();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

appointmentsRouter.post('/', appointtmentsController.create);

export default appointmentsRouter;
