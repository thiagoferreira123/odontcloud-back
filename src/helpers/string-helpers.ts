import { AppException } from 'src/common/handle-app-exception';

export function parseNumberToWhatsapp(phone: string): string {
  // Remove qualquer caractere não numérico
  const cleanNumber = phone.replace(/\D/g, '');

  // Detecta DDI, DDD e número
  const match = cleanNumber.match(/^(55|351)?(\d{2})(\d{8,9})$/);

  if (!match) {
    throw new AppException(
      'Número inválido. Certifique-se de que contém DDI, DDD e número.',
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, ddi, ddd, number] = match;

  // Ajusta o número conforme o DDD
  let adjustedNumber = number;

  if (parseInt(ddd, 10) > 30 && adjustedNumber.startsWith('9')) {
    // Remove o "9" inicial se o DDD for maior que 30
    adjustedNumber = adjustedNumber.substring(1);
  } else if (parseInt(ddd, 10) <= 30 && !adjustedNumber.startsWith('9')) {
    // Adiciona o "9" inicial se o DDD for menor ou igual a 30
    adjustedNumber = '9' + adjustedNumber;
  }

  // Retorna o número completo com DDI (adiciona DDI padrão 55 caso não exista)
  const finalDdi = ddi || '55';
  return `${finalDdi}${ddd}${adjustedNumber}`;
}
