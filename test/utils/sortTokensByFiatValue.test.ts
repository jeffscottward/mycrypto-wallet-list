import dataUnsorted from '../__mocks__/ethplorer-response-tokens-unsorted-mock'
import dataSorted from '../__mocks__/ethplorer-response-tokens-sorted-mock'
import sortTokensByFiatValue from '../../src/utils/sortTokensByFiatValue'

test('sorts a list of tokens by fiat value', () => {
  expect(sortTokensByFiatValue(dataUnsorted.tokens)).toStrictEqual(dataSorted.tokens);
});