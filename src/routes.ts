import { Router } from 'express'

import UserController from './app/controllers/UserController'

import userValidator from './app/middlewares/validators/userValidator'

const router: Router = Router()

router.post('/', userValidator, UserController.store)

export default router
