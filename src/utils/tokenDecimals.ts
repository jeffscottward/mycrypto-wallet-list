export default function tokenDecimals(token: any): number {
  return token.tokenInfo.decimals || 0
}