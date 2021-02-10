import { camelCase, capitalize } from 'lodash'

export function getterKeyGet(keys: string[]): string {
  return (
    camelCase(keys[0]) +
    keys
      .slice(1)
      .map((key) => capitalize(key))
      .join('')
  )
}