// import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
// import { FindByEmailService } from '@auth/application/services/find-by-email/find-by-email.service';
// import { Observable } from 'rxjs';

// export class CurrentUserInterceptor implements NestInterceptor {
//   constructor(private readonly findByEmailService: FindByEmailService) {}

//   async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
//     const request = context.switchToHttp().getRequest();
//     if (request.user) {
//       const user = await this.findByEmailService.find(request.user.email);
//       request.user = user;
//     }

//     return next.handle();
//   }
// }
