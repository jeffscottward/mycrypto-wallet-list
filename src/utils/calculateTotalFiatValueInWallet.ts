import tokenFiatValue from './tokenFiatValue'

export default function calculateTotalFiatValueInWallet (wallet: any): number {
  let totalFiatValue = 0
  wallet.tokens.map((token) => totalFiatValue += tokenFiatValue(token))
  totalFiatValue += wallet.ETH.price.rate * wallet.ETH.balance
  return totalFiatValue
}