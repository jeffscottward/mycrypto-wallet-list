import tokenAsWholeUnits from './tokenAsWholeUnits'

export default function tokenFiatValue (token: any) {
  let tokenAmount = tokenAsWholeUnits(token)
  return Number(token.tokenInfo.price.rate * tokenAmount) || 0
} 