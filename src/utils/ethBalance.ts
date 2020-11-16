export default function ethBalance(wallet: any): number {
  return wallet.ETH.balance || 0
}
