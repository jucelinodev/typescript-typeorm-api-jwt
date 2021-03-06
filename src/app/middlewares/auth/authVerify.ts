import { Request, Response, NextFunction } from 'express'
import jwt, { Secret } from 'jsonwebtoken'

import authConfig from '../../../config/auth'

export interface IDecoded {
  id: string
  iat: number
  exp: number
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Access denied, token not provided' })
  }
  const [, token] = authHeader.split(' ')

  try {
    const decoded = jwt.verify(token, authConfig.secret as Secret) as IDecoded

    req.userId = decoded.id

    return next()
  } catch (error) {
    return res.status(401).json({ error: 'Token invalid' })
  }
}
