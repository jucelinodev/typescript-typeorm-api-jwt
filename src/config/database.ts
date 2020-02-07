import { ConnectionOptions } from 'typeorm'

export const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/../app/entities/**/*.{ts,js}'],
  logging: true,
  synchronize: true
}
