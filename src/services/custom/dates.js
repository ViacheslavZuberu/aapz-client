export function formatDate(dateTime) {
  let date = new Date(dateTime)

  return date.toLocaleDateString()
}
