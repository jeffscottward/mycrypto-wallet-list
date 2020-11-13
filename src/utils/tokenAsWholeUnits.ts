export default function tokenAsWholeUnits (token: any): number {
  return (token.balance / Math.pow(10, token.tokenInfo.decimals)) || 0
} 