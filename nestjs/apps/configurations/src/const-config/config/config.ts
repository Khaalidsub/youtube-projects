import { IConfig } from './config.interface';

export const config = (): IConfig => ({
  nest: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  database: {
    databaseUrl: process.env.DATABASE_URL,
  },
});
