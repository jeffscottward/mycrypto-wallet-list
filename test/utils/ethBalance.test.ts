
import data from '../__mocks__/ethplorer-response-tokens-sorted-mock'
import ethBalance from '../../src/utils/ethBalance'

test('calculatues the fiat value of eth', () => {
  expect(ethBalance(data)).toBe(0.9858895367496451);
});