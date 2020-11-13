import data from '../__mocks__/ethplorer-response-tokens-sorted-mock'
import calculateTotalFiatValueInWallet from '../../src/utils/calculateTotalFiatValueInWallet'

test('calculates the total fiat value in the wallet, both ETH and tokens', () => {
  expect(calculateTotalFiatValueInWallet(data)).toBe(1982.8357585594003);
});