/**
 * @function formatStringAsUrl
 * @description Formats a string as a URL.
 * @param name - string to be formatted
 * @returns a string formatted as a url
 */

export default function formatStringAsUrl(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}
