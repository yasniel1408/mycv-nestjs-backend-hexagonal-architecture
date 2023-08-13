import { UseGuards } from '@nestjs/common';
import { RefreshJwtGuard } from '../guards/refresh-jwt-auth.guard';

export function ValidateRefTokenAndNewTokens(): MethodDecorator & ClassDecorator {
  return UseGuards(new RefreshJwtGuard());
}
