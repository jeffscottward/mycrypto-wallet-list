import ethPrice from '../utils/ethPrice'
import ethBalance from '../utils/ethBalance'

export default function ethFiatValue (wallet: any): number {
  return (ethPrice(wallet) * ethBalance(wallet)) || 0
} 