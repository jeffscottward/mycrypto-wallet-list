import { validatorRegexRawObject } from './addressRegex'

export default function ethAddressValidator (address: string) {
  return  validatorRegexRawObject.test(address)
} 