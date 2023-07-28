import { UseInterceptors } from '@nestjs/common';
import { SerializeInterceptor } from '@utils/interceptors/serialize.interceptor';
import { ResponseBaseDto } from '@utils/response-base.dto.abstract';

export function SerializeResponseDto(dto: ResponseBaseDto): MethodDecorator & ClassDecorator {
  return UseInterceptors(new SerializeInterceptor(dto));
}
