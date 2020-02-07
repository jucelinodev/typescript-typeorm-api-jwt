import { Request, Response } from 'express'
import UserService from '../services/UserService'

class ProfileController {
  async show(req: Request, res: Response): Promise<Response> {
    const profile = await UserService.getUserById(req.userId)
    return res.json({ profile })
  }
}

export default new ProfileController()
