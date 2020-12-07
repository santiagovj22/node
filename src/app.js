import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { logger } from './core'
import { controllers } from './server/controllers'


export function application(){
    const app = express()
    
    app.set('port', process.env.PORT || 3000);
    app.use(cors())
    app.use(morgan('tiny'))
    app.use(express.json())
    app.use(express.urlencoded({ extended:false }))

    app.use(controllers)

    return app
}

export async function main(){
    try {
        const app = application()
        const port = app.get('port')
        app.listen(port, () => logger.info(`Server on port ${port}`))
    } catch (error) {
        logger.warn('unable to connect')
    }
}
