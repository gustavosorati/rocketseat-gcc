export function phoneFormatter(value: string) {
  return (value = value
    .replace(/\D/g, '')
    .replace(/(.{0})(\d)/, '$1 $2')
    .replace(/(.{3})(\d)/, '$1 $2')
    .replace(/(.{6})(\d)/, '$1 $2')
    .replace(/(.\d{4})(\d)/, '$1.$2'))
}

export function cepFormatter(value: string) {
  return (value = value.replace(/\D/g, '').replace(/(.{5})(\d)/, '$1-$2'))
}

export function inputPhoneFormatter(value: string) {
  return (value = value
    .replace(/\D/g, '')
    .replace(/(.{2})(\d)/, '$1 $2')
    .replace(/(.{8})(\d)/, '$1 $2'))
}
