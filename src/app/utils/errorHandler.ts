import Youch from 'youch'
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express'

const handlerError = async (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ('development') {
    const errors = await new Youch(err, req).toJSON()

    res.status(400).json(errors)
    return next()
  }

  return res.status(500).json({ error: 'Internal server error' })
}

export default handlerError
