export default function tokenAsWholeUnits (token: any) {
  return Number(token.balance / Math.pow(10, token.tokenInfo.decimals)) || 0
} 