import tokenBalance from './tokenBalance'
import tokenDecimals from './tokenDecimals'

export default function tokenAsWholeUnits (token: any): number {
  return (tokenBalance(token) / Math.pow(10, tokenDecimals(token))) || 0
} 