import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { provider_id, date } = request.body;

    const parseDate = parseISO(date);

    const CreateAppointment = container.resolve(CreateAppointmentService);

    const appointment = await CreateAppointment.execute({
      provider_id,
      date: parseDate,
    });

    return response.json(appointment);
  }
}
