import { Router } from 'express'
import { logger } from '../../../../core'

export const userRoutes = Router()
userRoutes.get('/', getUsers)

export function getUsers(req,res) {
    logger.info('user controller')
    res.json({data: {"name": "Santiago", "age":22, "profession": "Software developer"} })
}