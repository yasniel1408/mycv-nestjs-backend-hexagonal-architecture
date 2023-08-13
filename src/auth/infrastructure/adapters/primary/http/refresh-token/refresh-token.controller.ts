import { Controller, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { IRefreshTokenController } from '@auth/domain/ports/primary/http/refresh-token.controller.interface';
import { ValidateRefTokenAndNewTokens } from '@auth/infrastructure/decorators/new-refresh-token.decorator';
import { JwtFacadeService } from '@auth/application/jwt-facade/jwt.facade.service';
import { CurrentUser } from '@shared/infrastructure/decorators/current-user.decorator';
import { RefreshTokenResponseDto } from './dto/refresh-token.response.dto';
import { SerializeResponseDto } from '@shared/infrastructure/decorators/serialize.decorator';
import { RefreshTokenService } from '@src/auth/application/refresh-token/refresh-token.service';

@Controller('auth')
export class RefreshTokenController implements IRefreshTokenController<RefreshTokenResponseDto> {
  constructor(private refreshTokenService: RefreshTokenService) {}

  @Post('/refresh-token')
  @ValidateRefTokenAndNewTokens()
  @HttpCode(HttpStatus.OK)
  @SerializeResponseDto(RefreshTokenResponseDto)
  async refreshToken(@CurrentUser() user): Promise<RefreshTokenResponseDto> {
    //el guard coge el token de la cabecera y al user del token y lo mete en el request
    return this.refreshTokenService.refreshTokens(user.email, user.refreshToken);
  }
}
