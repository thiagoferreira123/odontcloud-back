export const parseFloatNumber = (value: string | number): number => {
  if (typeof value === 'string') {
    return parseFloat(value.replace(',', '.'));
  }

  return Number(Number(value).toFixed(1));
};

export function parseBrValueToNumber(value: string) {
  return Number(value.replace('.', '').replace(',', '.'));
}

export function parseToBrValue(value: string | number) {
  return typeof value === 'string'
    ? Number(parseBrValueToNumber(value)).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
