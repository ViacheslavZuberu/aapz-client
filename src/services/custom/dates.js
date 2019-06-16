import { format } from 'date-fns'

export function formatDate(dateTime, locale) {
  let date = dateTime

  if (typeof dateTime === 'string') {
    date = new Date(dateTime)
  }

  let result

  switch (locale) {
    case 'ukr':
      result = format(date, 'DD.MM.YYYY')
      break
    default:
      result = format(date, 'MM/DD/YYYY')
  }

  return result
}

export function formatDateTime(dateTime, locale) {
  let date = dateTime

  if (typeof dateTime === 'string') {
    date = new Date(dateTime)
  }

  let result

  switch (locale) {
    case 'ukr':
      result = format(date, 'DD.MM.YYYY HH:mm')
      break
    default:
      result = format(date, 'MM/DD/YYYY hh:mm A')
  }

  return result
}
