import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import ITeamsRepository from '@modules/teams/repositories/ITeamsRepository';
import TeamsRepository from '@modules/teams/infra/typeorm/repositories/TeamsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ITeamsRepository>(
  'TeamsRepository',
  TeamsRepository,
);
