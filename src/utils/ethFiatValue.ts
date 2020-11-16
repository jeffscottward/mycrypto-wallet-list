export default function ethFiatValue (wallet: any): number {
  return (wallet.ETH.price.rate * wallet.ETH.balance) || 0
} 