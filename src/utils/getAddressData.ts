export default async function getAddressData (address: string) {
  const getethData = async () => {
    try {
      const response = await window.fetch(
        `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`,
      )
      const JSONData = await response.json()
      return JSONData
    } catch (err) {
      throw err
    }
  }
  return await getethData()
}