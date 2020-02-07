import { User } from '../entities/User'
import { getRepository } from 'typeorm'

class UserService {
  async createUser(data: User): Promise<User> {
    const user = getRepository(User).create(data)
    return await getRepository(User).save(user)
  }
}

export default new UserService()
