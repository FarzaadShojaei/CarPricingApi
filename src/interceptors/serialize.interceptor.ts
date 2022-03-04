import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler, ClassSerializerInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';


export class SerializerInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> {
      //Run Someting before a Request Is Handled
      //by the request Handler
        console.log('I am Running Before The Handler', context);
        
        return handler.handle().pipe(
            map((data:any) => {
                //Run Something Before The Response is Setout
                console.log('I am Running Before The Response Is Set out', data);
            })
        )
    }

}