import { Router } from 'express'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'

import userValidator from './app/middlewares/validators/userValidator'

const router: Router = Router()

router.post('/', userValidator, UserController.store)
router.post('/session', SessionController.store)

export default router
