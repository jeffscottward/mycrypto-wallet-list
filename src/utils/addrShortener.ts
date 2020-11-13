import ReactHtmlParser from 'react-html-parser'

export default function addrShortener(addr: string) {
  if (addr) {
    return ReactHtmlParser(
      addr.substring(0, 6) +
        '&bull;&bull;&bull;' +
        addr.substring(addr.length - 6, addr.length),
    )
  }
  return ''
}
