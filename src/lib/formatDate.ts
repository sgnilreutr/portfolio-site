export default function dateFormatter({ date }: { date: string }) {
  return new Date(date).toLocaleDateString()
}
