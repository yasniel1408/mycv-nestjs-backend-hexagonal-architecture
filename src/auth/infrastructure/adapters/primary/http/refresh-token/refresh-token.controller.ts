import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { IRefreshTokenController } from '@auth/domain/ports/primary/http/refresh-token.controller.interface';
import { ValidateRefTokenAndNewTokens } from '@auth/infrastructure/decorators/new-refresh-token.decorator';
import { JwtFacadeService } from '@auth/application/jwt-facade/jwt.facade.service';
import { CurrentUser } from '@shared/infrastructure/decorators/current-user.decorator';

@Controller('auth')
export class RefreshTokenController implements IRefreshTokenController {
  constructor(private jwtFacadeService: JwtFacadeService) {}

  @Post('/refresh-token')
  @ValidateRefTokenAndNewTokens()
  @HttpCode(HttpStatus.OK)
  async refreshToken(@CurrentUser() user): Promise<any> {
    //el guard coge el token de la cabecera y al user del token y lo mete en el request
    return this.jwtFacadeService.createJwtAndRefreshToken(user);
  }
}
