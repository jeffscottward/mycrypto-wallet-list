import tokenFiatValue from './tokenFiatValue'

export default function sortTokensByFiatValue (tokens: any): any[] {
  if (tokens) {
    return tokens.sort((a, b) => { 
      return ((tokenFiatValue(b) - tokenFiatValue(a)) || 0)
    })
  } else {
    throw new Error ('Need tokens data to perform sort')
  }
}