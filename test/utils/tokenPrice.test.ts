
import data from '../__mocks__/ethplorer-response-tokens-sorted-mock'
import tokenPrice from '../../src/utils/tokenPrice'

test('gets price of a token', () => {
  expect(tokenPrice(data.tokens[0])).toBe(0.0253744228666);
});