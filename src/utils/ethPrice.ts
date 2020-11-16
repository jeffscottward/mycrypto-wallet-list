export default function ethPrice(wallet: any): number {
  return wallet.ETH.price.rate || 0
}
