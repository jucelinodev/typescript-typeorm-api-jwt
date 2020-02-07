import { Request, Response } from 'express'
import UserService from '../services/UserService'

class UserController {
  async store(req: Request, res: Response): Promise<Response> {
    const user = await UserService.createUser(req.body)

    const { id, name, email, createdAt, updatedAt } = user

    return res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: { id, name, email, createdAt, updatedAt }
    })
  }
}

export default new UserController()
