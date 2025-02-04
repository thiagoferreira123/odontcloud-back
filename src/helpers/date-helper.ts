export function parseIsoDateToBR(date: string): string {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
}

export function parseTimeToBR(time: string): string {
  return time.slice(0, 5);
}
