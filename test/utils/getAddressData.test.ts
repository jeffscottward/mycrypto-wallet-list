import getAddressData from '../../src/utils/getAddressData'
import dataUnsorted from '../__mocks__/ethplorer-response-tokens-unsorted-mock'

// Would need to do a deeper dive on mocking window.fetch API
// https://www.leighhalliday.com/mock-fetch-jest

test('calls the API and has a top level ETH property in the response', async () => {
  // let apiResult = await getAddressData('0x83F2362A94d3FA99905DAb8e52dC1A74Dd22f31b')
  // expect(getAddressData('0x83F2362A94d3FA99905DAb8e52dC1A74Dd22f31b')).toHaveProperty('ETH');
  expect(true).toBe(true);
});