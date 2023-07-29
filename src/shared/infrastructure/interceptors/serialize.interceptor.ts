import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { Observable, map } from 'rxjs';
import { ResponseBaseDto } from '../response-base.dto.abstract';

@Injectable()
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ResponseBaseDto) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        return plainToInstance(this.dto as ClassConstructor<unknown>, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
