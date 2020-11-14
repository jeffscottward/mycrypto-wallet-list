// PromiseFulfilledResult<T>
export default async function getAddressData (address: string): Promise<any> {
  const getethData = async () => {
    try {
      const response = await window.fetch(
        `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=EK-kTHPx-LXrWGmC-3QLs5`,
      )
      const JSONData = await response.json()
      return JSONData
    } catch (err) {
      throw err
    }
  }
  let result = await getethData()
  return result
}