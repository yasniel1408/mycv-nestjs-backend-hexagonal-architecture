import { CanActivate, ExecutionContext } from '@nestjs/common';

export class IsAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (!request.user) {
      return false;
    }

    if (request.user.isAdmin) {
      return true;
    }

    return false;
  }
}
