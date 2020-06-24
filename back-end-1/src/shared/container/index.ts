import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';
import IAppointmentsRepository from '@modules/appointments/repositories/IApointmentsRepository';
import AppointmentsRepository from '@modules/appointments/Infra/typeorm/repositories/AppointmentsRepositories';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/Infra/typeorm/repositories/UsersRepository';

// import IUsersTokensRepository from '@modules/users/repositories/IUsersTokensRepository';
// import UsersTokensRepository from '@modules/users/Infra/typeorm/repositories/ ';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
