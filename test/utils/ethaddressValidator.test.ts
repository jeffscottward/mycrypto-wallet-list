import data from '../__mocks__/ethplorer-response-tokens-sorted-mock'
import ethAddressValidator from '../../src/utils/ethAddressValidator'

test('converts an address to a shorthand one with bullets', () => {
  expect(ethAddressValidator('0x83F2362A94d3FA99905DAb8e52dC1A74Dd22f31b')).toBe(true);
  expect(ethAddressValidator('0x83F2362A94d3FA99905DAb8e52dC1A74Dd22f31bBADADDRESS')).toBe(false);
});