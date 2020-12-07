import winston from 'winston'

export const logger = winston.createLogger({
    level: 'info',
    defaultMeta: { service: 'api' },
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple()
        ),
      }),
    ],
});