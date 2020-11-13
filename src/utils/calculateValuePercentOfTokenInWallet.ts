import calculateTotalFiatValueOfTokensInWallet from './calculateTotalFiatValueInWallet'
import tokenFiatValue from './tokenFiatValue'

export default function calculateValuePercentOfTokenInWallet (token: any, tokens: any) {
  let fiatTotalInWallet = calculateTotalFiatValueOfTokensInWallet(tokens)
  let fiatValueofToken = tokenFiatValue(token)
  return Number((fiatValueofToken / fiatTotalInWallet) * 100).toFixed(2)
}
