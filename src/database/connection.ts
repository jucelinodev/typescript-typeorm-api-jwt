import { createConnection } from 'typeorm'

const startTypeORM = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/../app/entities/**/*.{ts,js}'],
      logging: true,
      synchronize: true
    })
    // tslint:disable-next-line: no-console
    console.log('TypeORM running')
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error)
  }
}

startTypeORM()
