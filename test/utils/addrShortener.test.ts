import data from '../__mocks__/ethplorer-response-tokens-sorted-mock'
import addrShortener from '../../src/utils/addrShortener'

test('converts an address to a shorthand one with bullets', () => {
  expect(addrShortener(data.address)).toBe('0x83f2•••22f31b');
});