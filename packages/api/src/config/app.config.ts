export const appConfig = {
  API: {
    API_PORT: +process.env.API_PORT || 3030,
  },
  DB: {
    MYSQL_HOST: process.env.MYSQL_HOST || 'localhost',
    MYSQL_PORT: +process.env.MYSQL_PORT || 3306,
    MYSQL_USER: process.env.MYSQL_USER || 'user',
    MYSQL_USER_PASS: process.env.MYSQL_PASSWORD || 'password',
    MYSQL_DB: process.env.MYSQL_DB || 'db',
  },
  COIN_API: {
    COIN_API_KEY: process.env.COIN_API_KEY,
  },
};
