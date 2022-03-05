import { UserDto } from './../users/dtos/user.dto';
import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler, ClassSerializerInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
 

export class SerializerInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> {
      
        
        return handler.handle().pipe(
            map((data: any) => {
            
                return plainToClass(UserDto, data, {
                    excludeExtraneousValues: true,
                });
            }),
        );
    }

}