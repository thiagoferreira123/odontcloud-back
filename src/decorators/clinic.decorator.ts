import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';

export const ClinicDecorator = createParamDecorator(
  (filter: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    if (request.clinic && request.clinic.clinic_id) {
      if (filter) {
        return request.clinic[filter];
      } else {
        return request.clinic;
      }
    } else {
      throw new NotFoundException(
        'Usuário não encontrado no request. Use o AuthGuard para obter o usuário.',
      );
    }
  },
);
