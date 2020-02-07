import { User } from '../entities/User'
import { getRepository } from 'typeorm'

class UserService {
  async getUserByEmail(userEmail: string): Promise<User | undefined> {
    return await getRepository(User).findOne({ where: { email: userEmail } })
  }
  async createUser(data: User): Promise<User> {
    const user = getRepository(User).create(data)
    return await getRepository(User).save(user)
  }
}

export default new UserService()
