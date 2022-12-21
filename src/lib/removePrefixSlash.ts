export default function removePrefixSlash(url: string) {
  if (url) {
    return url.replace(/^\/+/, '')
  }
  return url
}
