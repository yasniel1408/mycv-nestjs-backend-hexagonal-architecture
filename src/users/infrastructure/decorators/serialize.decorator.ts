import { UseInterceptors } from '@nestjs/common';
import { ResponseBaseDto } from '@utils/responseBase.dto.abstract';
import { SerializeInterceptor } from '@users/infrastructure/interceptors/serialize.interceptor';

export function SerializeResponseDto(dto: ResponseBaseDto): MethodDecorator & ClassDecorator {
  return UseInterceptors(new SerializeInterceptor(dto));
}
