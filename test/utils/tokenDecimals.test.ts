
import data from '../__mocks__/ethplorer-response-tokens-sorted-mock'
import tokenDecimals from '../../src/utils/tokenDecimals'

test('gets the decimals of a token in a wallet', () => {
  expect(tokenDecimals(data.tokens[0])).toBe("18");
});