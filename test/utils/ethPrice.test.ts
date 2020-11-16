
import data from '../__mocks__/ethplorer-response-tokens-sorted-mock'
import ethPrice from '../../src/utils/ethPrice'

test('calculatues the fiat value of eth', () => {
  expect(ethPrice(data)).toBe(469.4119877480425);
});