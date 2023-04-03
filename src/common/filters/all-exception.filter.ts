import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common'
// @Catch()
// export class AllExceptionsFilter implements ExceptionFilter {
//   constructor() // private readonly configService: ConfigService, // private httpService: HttpService,
//   {}
//   catch(exception: unknown, host: ArgumentsHost) {
//     const ctx = host.switchToHttp()
//     const response = ctx.getResponse()
//     const request = ctx.getRequest()

//     const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR

//     let message = exception instanceof HttpException ? exception.message : 'INTERNAL_SERVER_ERROR'
//     const name = exception instanceof HttpException ? exception.name : 'INTERNAL_SERVER_ERROR'
//     if (message === 'INTERNAL_SERVER_ERROR' && (exception as any).message) {
//       message = (exception as any).message
//     } else if (message) {
//       message = message
//     }

//     const jsonRequest = {
//       body: request.body,
//       header: request.headers,
//       ip: request.ip,
//       user: request.user,
//     }
//     try {
//       // const obj = {
//       //   project: 'NTSS',
//       //   source: 'NTSS_API',
//       //   environments: this.configService.get<string>('NODE_ENV'),
//       //   error: exception,
//       //   request: jsonRequest,
//       //   message: message,
//       //   statusCode: status,
//       //   timestamp: new Date().toISOString(),
//       //   path: request.url,
//       //   name: name,
//       // }
//       // const url = `https://ape-bot-api.apetechs.co/bug_log/create_data`
//       // const url = `http://localhost:3401/bug_log/create_data`
//       // this.httpService
//       //   .post(url, obj)
//       //   .toPromise()
//       //   .then((res: any) => {
//       //     // console.log('success')
//       //   })
//       //   .catch((err: any) => {
//       //     // console.log(err)
//       //   })
//     } catch (error) {
//       // console.log(error)
//     }
//     response.status(status).json({
//       statusCode: status,
//       timestamp: new Date().toISOString(),
//       path: request.url,
//       message: message,
//       name: name,
//     })
//   }
// }

// NEW VERSION
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const err: any = exception
    console.log(err.stack)
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR

    let message = exception instanceof HttpException ? exception.message : 'INTERNAL_SERVER_ERROR'
    const name = exception instanceof HttpException ? exception.name : 'INTERNAL_SERVER_ERROR'
    if (message === 'INTERNAL_SERVER_ERROR' && (exception as any).message) {
      message = (exception as any).message
    } else if (message) {
      message = message
    }
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: message,
      name: name,
    })
  }
}
