/**
 * Force browser download
 * @param {Blob} rawData
 * @param {String} filename
 * @param {String} ext
 * @returns
 */
export function forceDownload(rawData, filename, ext) {
  const url = window.URL.createObjectURL(new Blob([rawData]))
  const link = document.createElement('a')
  link.href = url
  const isHaveExt = filename.endsWith(ext)
  link.setAttribute('download', `${filename}${isHaveExt ? '' : `.${ext}`}`)
  document.body.appendChild(link)
  link.click()
  link.remove()
  return rawData
}
