import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'db',
  entities: ['dist/**/**.dao{.ts,.js}'],
  migrations: ['dist/**/**.migration{.ts,.js}'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
