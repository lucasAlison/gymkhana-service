import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import ITeamsRepository from '@modules/teams/repositories/ITeamsRepository';
import TeamsRepository from '@modules/teams/infra/typeorm/repositories/TeamsRepository';
import IGymkhanasRepository from '@modules/gymkhanas/repositories/IGymkhanasRepository';
import GymkhanasRepository from '@modules/gymkhanas/infra/typeorm/repositories/GymkhanasRepository';
import IActivitiesRepository from '@modules/activities/repositories/IActivitiesRepository';
import ActivitiesRepository from '@modules/activities/infra/typeorm/repositories/ActivitiesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ITeamsRepository>(
  'TeamsRepository',
  TeamsRepository,
);

container.registerSingleton<IGymkhanasRepository>(
  'GymkhanasRepository',
  GymkhanasRepository,
);

container.registerSingleton<IActivitiesRepository>(
  'ActivitiesRepository',
  ActivitiesRepository,
);


