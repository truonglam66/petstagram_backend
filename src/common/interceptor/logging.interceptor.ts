import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now()
    const args = context.getArgs()

    return next.handle().pipe(
      tap(() => {
        const msToRun = Date.now() - now
        // API chạy quá 1s thì mới log ra
        if (msToRun < 1000) return

        const checkIsObject = (obj: any) => {
          if (!obj) return false
          for (const i in obj) return true
          return false
        }
        let logStr = `-------------- API ${args[0]?.url} --------------\n`
        if (args[0]) {
          if (checkIsObject(args[0].body)) logStr += `Body: ${JSON.stringify(args[0].body)}\n`
          if (checkIsObject(args[0].params)) logStr += `Param: ${JSON.stringify(args[0].params)}\n`
          if (checkIsObject(args[0].query)) logStr += `Query: ${JSON.stringify(args[0].query)}\n`
        }

        logStr += `Time to run: ${msToRun}ms\n`
        logStr += `---------------------------------------------\n`
        console.log(logStr)
      }),
    )
  }
}
