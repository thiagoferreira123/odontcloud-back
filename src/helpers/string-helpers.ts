export function parseNumberToWhatsapp(phoneNumber: string): string {
  // Remove o zero inicial se houver
  if (phoneNumber.startsWith('0')) {
    phoneNumber = phoneNumber.substring(1);
  }

  // Extrai o DDD (os dois primeiros dígitos)
  const ddd = parseInt(phoneNumber.slice(0, 2));
  let numero = phoneNumber.slice(2);

  // Verifica se o DDD é maior que 30 e se o número começa com 9
  if (ddd > 30 && numero.startsWith('9')) {
    // Remove o primeiro '9' do número
    numero = numero.substring(1);
  }

  // Retorna o telefone ajustado
  return `${ddd}${numero}`;
}
