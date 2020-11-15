import getAddressData from '../../src/utils/getAddressData'
import dataUnsorted from '../__mocks__/ethplorer-response-tokens-unsorted-mock'

// Browser mocking sucks - swtiched window.fetch to axios
// https://kentcdodds.com/blog/stop-mocking-fetch

test('calls the API and has a top level ETH property in the response', async () => {
  let apiResult = await getAddressData(dataUnsorted.address)
  expect(apiResult).toHaveProperty('ETH');
  // expect(true).toBe(true);
});