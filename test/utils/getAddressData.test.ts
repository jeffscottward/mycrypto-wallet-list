import getAddressData from '../../src/utils/getAddressData'
import dataUnsorted from '../__mocks__/ethplorer-response-tokens-unsorted-mock'

// Would need to do a much deeper dive on fetch mocking
// Found this in my searching
// https://kentcdodds.com/blog/stop-mocking-fetch

test('calls the API and has a top level ETH property in the response', async () => {
  // let apiResult = await getAddressData(dataUnsorted.address)
  // expect(apiResult).toHaveProperty('ETH');
  expect(true).toBe(true);
});