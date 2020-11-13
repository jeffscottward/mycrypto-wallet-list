import tokenFiatValue from './tokenFiatValue'

export default function sortTokensByFiatValue (tokens: any) {
  if (tokens) {
    let sortedTokens = tokens.sort((a, b) => { 
      const fiatValueA = tokenFiatValue(a)        
      const fiatValueB = tokenFiatValue(b)
      return ((fiatValueB - fiatValueA) || 0)
    })
    return sortedTokens
  } else {
    throw new Error ('Need tokens data to perform sort')
  }
}