import axios from 'axios'

export default async function getAddressData (address: string): Promise<any> {
  const getethData = async () => {
    try {
      const response = await axios.get(
        `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=EK-kTHPx-LXrWGmC-3QLs5`,
      )
      return response.data
    } catch (err) {
      throw err
    }
  }
  let result = await getethData()
  return result
}