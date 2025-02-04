import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ClinicService, JWTBody } from '../clinic/clinic.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly clinicService: ClinicService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    try {
      const { accessToken } = request.cookies;

      if (!accessToken) return false;

      const data: JWTBody = this.clinicService.checkToken(accessToken);
      request.tokenPayload = data;

      request.clinic = await this.clinicService.showUser(data.clinic_id);

      if (request.clinic.subscription && !request.url.includes('payments')) {
        const status = request.clinic.subscription?.subscription_status;
        const statusMessages = {
          canceled:
            'Sua assinatura foi cancelada. Esperamos que tenha aproveitado o tempo conosco. Se decidir voltar, estaremos esperando de braços abertos para oferecer ainda mais experiências incríveis.',
          refunded:
            'Notamos que você solicitou um reembolso. Faça uma nova assinatura, para desbloquear novamente todos os benefícios e continuar aproveitando o OdontCloud sem limites.',
          chargeback:
            'Notamos que você solicitou um reembolso diretamente com a operadora do cartão. Faça uma nova assinatura, para desbloquear novamente todos os benefícios e continuar aproveitando o OdontCloud sem limites.',
          past_due:
            'Sua assinatura expirou e estamos sentindo sua falta. Renove agora para desbloquear novamente todos os benefícios e continuar aproveitando o OdontCloud sem limites.',
          dispute:
            'Notamos que você solicitou um reembolso. Faça uma nova assinatura, para desbloquear novamente todos os benefícios e continuar aproveitando o OdontCloud sem limites.',
        };

        // Se o status requer tratamento especial (não está entre os permitidos)
        if (
          status &&
          ![
            'active',
            'incomplete',
            'billet_printed',
            'waiting_payment',
          ].includes(status)
        ) {
          const message =
            statusMessages[status] || 'Status unknown. Please contact support.';
          // Lança a exceção com a mensagem personalizada para o status
          throw new HttpException(
            {
              statusCode: HttpStatus.PAYMENT_REQUIRED,
              error:
                'Payment required. Access denied due to subscription status.',
              fullName: request.clinic.nome_completo,
              subscriptionStatus: status,
              message, // Inclui a mensagem personalizada
              subscription_level:
                request.clinic.subscription.subscription_level,
            },
            HttpStatus.PAYMENT_REQUIRED,
          );
        }
      }

      return true;
    } catch (e) {
      if (e.status === HttpStatus.PAYMENT_REQUIRED) throw e;
      throw e;
    }
  }
}
