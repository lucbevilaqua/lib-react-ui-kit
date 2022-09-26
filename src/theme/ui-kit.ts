export function toRem (value: string | number): string {
  const parsedValue = Number(value.toString().replace('px', ''))

  return `${parsedValue / 16}rem`
}
