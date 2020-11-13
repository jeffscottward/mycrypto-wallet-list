import data from '../__mocks__/ethplorer-response-tokens-sorted-mock'
import tokenFiatValue from '../../src/utils/tokenFiatValue'

test('calculatues the fiat value of a token', () => {
  expect(tokenFiatValue(data.tokens[0])).toBe(1398.4944344353817);
});