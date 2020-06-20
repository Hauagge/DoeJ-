import Apperror from '@shared/erros/AppErros';
import FakeAppointmentRepositry from '../repositories/fakes/fakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointent', () => {
  it('should be able to  cerate a new appointment', async () => {
    const fakeAppointmentRepositry = new FakeAppointmentRepositry();
    const createAppointent = new CreateAppointmentService(
      fakeAppointmentRepositry,
    );
    const appointment = await createAppointent.execute({
      date: new Date(),
      provider_id: '233234',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('233234');
  });

  it('should not be able to  cerate tow appointment on the same time', async () => {
    const fakeAppointmentRepositry = new FakeAppointmentRepositry();
    const createAppointent = new CreateAppointmentService(
      fakeAppointmentRepositry,
    );

    const appointmentDate = new Date(2020, 5, 10, 11);

    await createAppointent.execute({
      date: appointmentDate,
      provider_id: '233234',
    });

    await expect(
      createAppointent.execute({
        date: appointmentDate,
        provider_id: '233234',
      }),
    ).rejects.toBeInstanceOf(Apperror);
  });
});
