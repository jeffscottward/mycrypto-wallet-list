export default function truncateText(input: string, charCount: number) {
  if (input.length > charCount) {
    return input.substring(0, charCount) + '...'
  }
  return input || ''
}