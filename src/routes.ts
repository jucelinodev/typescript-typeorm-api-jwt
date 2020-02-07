import { Router } from 'express'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import ProfileController from './app/controllers/ProfileControler'

import userValidator from './app/middlewares/validators/userValidator'
import sessionValidator from './app/middlewares/validators/sessionValidator'

import authVerify from './app/middlewares/auth/authVerify'

const router: Router = Router()

router.post('/', userValidator, UserController.store)
router.post('/session', sessionValidator, SessionController.store)

router.use(authVerify)

router.get('/profile', ProfileController.show)

export default router
