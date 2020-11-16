import tokenAsWholeUnits from './tokenAsWholeUnits'
import tokenPrice from './tokenPrice'

export default function tokenFiatValue (token: any): number {
  return (tokenPrice(token) * tokenAsWholeUnits(token)) || 0
} 