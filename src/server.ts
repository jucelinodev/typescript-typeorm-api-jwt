import * as dontenv from 'dotenv'
dontenv.config()

import 'reflect-metadata'
import './database/connection'

import express, { Application } from 'express'

import routes from './routes'

class Server {
  public server: Application = express()

  constructor() {
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
  }

  routes() {
    this.server.use('/api', routes)
  }
}

export default new Server().server
