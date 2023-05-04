import type { Project } from 'gql/graphql'
import dateFormatter from 'lib/formatDate'
import type { DateFormatter } from 'lib/formatDate'
import { PROJECT_LINK } from 'lib/globalConstants'
import Link from 'next/link'

interface ProjectListItemProps extends Pick<DateFormatter, 'noDay'> {
  project: Project
}

const ProjectListItem = ({ noDay, project }: ProjectListItemProps) => {
  const {
    date,
    title,
    sys: { id },
  } = project

  const toUseHref = `${PROJECT_LINK}/${id}`

  return (
    <li className=" relative -mx-3">
      <Link href={toUseHref}>
        <div className="hover:bg-zinc-700 dark:hover:bg-zinc-800 transition grid grid-cols-[100px_1fr] gap-3 py-1.5 px-3">
          <span className="text-zinc-400 dark:text-zinc-500">
            {dateFormatter({ date, noDay })}
          </span>
          <span>{title}</span>
        </div>
      </Link>
    </li>
  )
}

export default ProjectListItem
