export default function addrShortener(addr: string): string {
  if (addr) {
    return (
      addr.substring(0, 6) +
      String.fromCharCode(8226) + String.fromCharCode(8226) + String.fromCharCode(8226) +
      addr.substring(addr.length - 6, addr.length)
    )
  }
}
