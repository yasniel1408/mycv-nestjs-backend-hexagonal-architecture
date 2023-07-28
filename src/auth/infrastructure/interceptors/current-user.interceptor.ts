import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { FindOneUserService } from '@users/application/find-one-user/find-one-user.service';
import { Observable } from 'rxjs';

export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private findOneUserService: FindOneUserService) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    if (request.user) {
      const user = await this.findOneUserService.findOne(request.user.id);
      request.user = user;
    }

    return next.handle();
  }
}
