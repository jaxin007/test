import 'express-async-errors';

import { appConfig } from './config/app.config';
console.log(appConfig);
import app from './app';
import { AppDataSource } from './config/dataSource';
import { appWorkLogger } from './utils/logger';

AppDataSource.initialize()
  .then(async () => {
    app.listen(appConfig.API.API_PORT, () => {
      appWorkLogger.info(`app running on port ${appConfig.API.API_PORT}...`);
    });
  })
  .catch((error) => appWorkLogger.error('Error: ', error));
