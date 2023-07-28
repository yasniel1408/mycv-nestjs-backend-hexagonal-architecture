import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator((data: never, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  // Por defecto la estrategia de jwt guarda el user del jwt en request.user
  return request.user;
});
