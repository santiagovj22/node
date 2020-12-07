import { Router } from 'express'
import { apiRoutes } from './api'

export const controllers = Router()

controllers.use('/api/v1', apiRoutes)
