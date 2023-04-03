import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { ValidationPipe } from '@nestjs/common'
import rateLimit from 'express-rate-limit'
import { AppModule } from './modules/app.module'
import { json, urlencoded } from 'express'
import { LoggingInterceptor } from './common/interceptor'
import { AllExceptionsFilter } from './common/filters/all-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  const port = configService.get<string>('PORT')
  app.enableCors()
  app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000, // 1 minutes
      max: 100000, // limit each IP to 100,000 requests per windowMs
    }),
  )

  app.use(json({ limit: '10mb' }))
  app.use(urlencoded({ extended: true, limit: '10mb' }))

  app.useGlobalPipes(new ValidationPipe({ transform: true, forbidUnknownValues: false }))
  app.useGlobalFilters(new AllExceptionsFilter())
  app.useGlobalInterceptors(new LoggingInterceptor())

  await app.listen(port || 3500)
  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
