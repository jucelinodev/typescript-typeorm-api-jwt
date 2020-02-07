import * as dontenv from 'dotenv'
dontenv.config()

import 'reflect-metadata'
import './database/connection'
import 'express-async-errors'

import express, { Application } from 'express'

import routes from './routes'
import handlerError from './app/utils/errorHandler'

class Server {
  public server: Application = express()

  constructor() {
    this.middlewares()
    this.routes()
    this.exceptionHandler()
  }

  middlewares() {
    this.server.use(express.json())
  }

  routes() {
    this.server.use('/api', routes)
  }

  exceptionHandler() {
    this.server.use(handlerError)
  }
}

export default new Server().server
