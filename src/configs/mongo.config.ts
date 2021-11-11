import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const getMongoString = (configService: ConfigService) => {
  return `mongodb://${configService.get('MONGO_HOST')}:${configService.get(
    'MONGO_PORT',
  )}/${configService.get('MONGO_DATABASE')}`;
};
