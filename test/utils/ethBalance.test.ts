
import data from '../__mocks__/ethplorer-response-tokens-sorted-mock'
import ethBalance from '../../src/utils/ethBalance'

test('gets the balance of eth in a wallet', () => {
  expect(ethBalance(data)).toBe(0.9858895367496451);
});