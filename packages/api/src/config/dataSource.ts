import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { appConfig } from './app.config';

const { DB } = appConfig;

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: DB.MYSQL_HOST,
  port: DB.MYSQL_PORT,
  username: DB.MYSQL_USER,
  password: DB.MYSQL_USER_PASS,
  database: DB.MYSQL_DB,
  synchronize: true,
  logging: false,
  entities: [`${__dirname}/../entities/**/*{.ts,.js}`],
  migrations: [`${__dirname}/../migration/**/*{.ts,.js}`],
  subscribers: [`${__dirname}/../subscriber/**/*{.ts,.js}`],
});
