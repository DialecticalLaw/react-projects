export function replaceComma<T extends string | string[]>(arr: T[]) {
  return arr.map((item) => {
    if (typeof item === 'string') {
      return item.replaceAll(',', '');
    } else {
      return item.join(' ');
    }
  });
}
