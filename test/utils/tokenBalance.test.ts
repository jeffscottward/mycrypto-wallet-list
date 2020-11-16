
import data from '../__mocks__/ethplorer-response-tokens-sorted-mock'
import tokenBalance from '../../src/utils/tokenBalance'

test('gets the balance of token in a wallet', () => {
  expect(tokenBalance(data.tokens[0])).toBe(5.511433469e+22);
});