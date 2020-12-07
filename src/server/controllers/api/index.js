import { Router } from 'express'

import { userRoutes } from './users/users.routes'

export const apiRoutes = Router()

apiRoutes.use('/users', userRoutes)
