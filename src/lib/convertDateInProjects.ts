import type { Query } from '__generated__/graphql'
import dateFormatter from './formatDate'

export default function convertDateInProjects(
  projectData: Pick<Query, 'projectCollection'>
) {
  return projectData?.projectCollection?.items.map((item) => {
    if (item) {
      return { ...item, date: dateFormatter({ date: item.date }) }
    }
    return null
  })
}
