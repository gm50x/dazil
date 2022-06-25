import { INestApplication, Logger } from '@nestjs/common';

export const useCors = (app: INestApplication) => {
  app.enableCors();
  Logger.log('Cors initialized', 'CORS');
  return app;
};