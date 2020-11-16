export default function tokenPrice(token: any): number {
  return token.tokenInfo.price.rate || 0
}
