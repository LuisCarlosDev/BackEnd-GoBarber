import 'reflect-metadata';

import AppError from '@shared/errors/AppError';
import FakeAppointementsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointementsRepository = new FakeAppointementsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointementsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointementsRepository = new FakeAppointementsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointementsRepository,
    );

    const appointmentDate = new Date(2020, 12, 14, 17);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123123',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
