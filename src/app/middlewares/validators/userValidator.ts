import * as Yup from 'yup'
import { Request, Response, NextFunction } from 'express'

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6)
    })

    await schema.validate(req.body, { abortEarly: false })

    return next()
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.inner[0].message })
  }
}
