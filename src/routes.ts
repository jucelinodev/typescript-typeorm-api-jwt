import { Router } from 'express'

const router: Router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Test Express' })
})

export default router
