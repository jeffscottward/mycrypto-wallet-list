import data from '../__mocks__/ethplorer-response-tokens-sorted-mock'
import tokenAsWholeUnits from '../../src/utils/tokenAsWholeUnits'

test('converts raw amount to crypto to whole units based on decimals', () => {
  expect(tokenAsWholeUnits(data.tokens[0])).toBe(55114.33469);
});