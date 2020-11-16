
import data from '../__mocks__/ethplorer-response-tokens-sorted-mock'
import ethPrice from '../../src/utils/ethPrice'

test('gets the price of eth from data payload', () => {
  expect(ethPrice(data)).toBe(469.4119877480425);
});