import tokenFiatValue from './tokenFiatValue'
import ethBalance from './ethBalance'
import ethPrice from './ethPrice'

export default function calculateTotalFiatValueInWallet (wallet: any): number {
  let totalFiatValue = 0
  if(wallet.tokens){
    wallet.tokens.map((token) => totalFiatValue += tokenFiatValue(token))
  }
  totalFiatValue += ethPrice(wallet) * ethBalance(wallet)
  return totalFiatValue
}