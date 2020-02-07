import { createConnection } from 'typeorm'

import { connectionOptions } from '../config/database'

const startTypeORM = async () => {
  try {
    await createConnection(connectionOptions)
    // tslint:disable-next-line: no-console
    console.log('TypeORM running')
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error)
  }
}

startTypeORM()
