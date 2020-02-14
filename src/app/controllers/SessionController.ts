import { Request, Response } from 'express'
import jwt, { Secret } from 'jsonwebtoken'
import UserService from '../services/UserService'

import authConfig from '../../config/auth'

class SessionController {
  async store(req: Request, res: Response): Promise<Response> {
    const user = await UserService.getUserByEmail(req.body.email)

    if (!user) {
      return res.status(400).json({
        error: 'User not found!'
      })
    }

    if (!(await user.checkPassword(req.body.password))) {
      return res.status(401).json({
        error: 'Password does not match!'
      })
    }
    const { id } = user

    const token = jwt.sign({ id }, authConfig.secret as Secret, {
      expiresIn: '1d'
    })

    return res.json({
      success: true,
      message: 'successfully generated token',
      token
    })
  }
}

export default new SessionController()
