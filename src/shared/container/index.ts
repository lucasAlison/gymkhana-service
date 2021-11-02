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
import IActivityResponsesRepository from '@modules/activities/repositories/IActivityResponsesRepository';
import ActivityResponsesRepository from '@modules/activities/infra/typeorm/repositories/ActivityResponsesRepository';
import ITeamActivitiesRepository from '@modules/teams/repositories/ITeamActivitiesRepository';
import TeamActivitiesRepository from '@modules/teams/infra/typeorm/repositories/TeamActivitiesRepository';
import ITipsRepository from '@modules/activities/repositories/ITipsRepository';
import TipsRepository from '@modules/activities/infra/typeorm/repositories/TipsRepository';

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

container.registerSingleton<IActivityResponsesRepository>(
  'ActivityResponsesRepository',
  ActivityResponsesRepository,
);

container.registerSingleton<ITeamActivitiesRepository>(
  'TeamActivitiesRepository',
  TeamActivitiesRepository,
);

container.registerSingleton<ITipsRepository>(
  'TipsRepository',
  TipsRepository,
);

