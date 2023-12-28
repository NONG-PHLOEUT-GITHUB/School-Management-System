import { format } from 'date-fns'
/**
 * Convert object to form data
 * @param {*} object
 * @returns
 */
export function getFormData(object) {
  const formData = new FormData()
  Object.keys(object).forEach((key) => {
    if (object[key] === null) {
      formData.append(key, '')
    } else {
      formData.append(key, object[key])
    }
  })
  return formData
}

/**
 * Generate a mask (used in maska) for number with thousands separator
 * @param {*} separator
 * @returns string
 */
const createThousandsMask = (separator = ' ') => {
  const start = '#'
  const MAX_THOUSANDS = 20 //how many thousand pattern we want to generate
  return [...Array(MAX_THOUSANDS)].reduce((acc, _, i) => {
    if (!i) return [start]

    const add = `${!(i % 3) ? '#' + separator : '#'}`
    acc.push(`${add}${acc.at(-1)}`)
    return acc
  }, [])
}

/*
 * Generate a mask (used in maska) for number with comma (,) or dot (.)
 * @return object
 */
const createDecimalMask = () => {
  return {
    mask: 'X*',
    // allow only number comma and dot
    tokens: { X: { pattern: /^[0-9.,]+$/ } },
  }
}

/*
 * Check if url is correct format or not, url must be contain with protocol https or http
 * @return boolean
 */
export function isValidURL(strURL = '') {
  if (!strURL) {
    // url is not required so, it can be blank
    return true
  }
  const httpRegex =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_.~#?&=]*)$/
  return httpRegex.test(strURL)
}

/*
 * Convert date time to date formate as you want
 * @param {date}
 * @param {stringFormat} is date format that you want ex: 'dd/MM/yyyy'
 */
export function formatDate(date, stringFormat) {
  // Return format date as format that you set in param stringFormat
  return date ? format(new Date(date).getTime(), stringFormat) : ''
}

export const localeThousandsMask = createThousandsMask()
export const localeDecimalMask = createDecimalMask()
