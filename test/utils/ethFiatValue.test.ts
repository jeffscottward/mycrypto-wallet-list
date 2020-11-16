
import data from '../__mocks__/ethplorer-response-tokens-sorted-mock'
import ethFiatValue from '../../src/utils/ethFiatValue'

test('calculatues the fiat value of eth', () => {
  expect(ethFiatValue(data)).toBe(462.7883671456477);
});