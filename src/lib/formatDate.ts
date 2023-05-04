export interface DateFormatter {
  date: string
  noDay?: boolean
}

export default function dateFormatter({ date, noDay = false }: DateFormatter) {
  if (noDay) {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    })
  }
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
