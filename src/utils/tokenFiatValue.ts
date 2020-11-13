import tokenAsWholeUnits from './tokenAsWholeUnits'

export default function tokenFiatValue (token: any): number {
  let tokenAmount = tokenAsWholeUnits(token)
  return (token.tokenInfo.price.rate * tokenAmount) || 0
} 