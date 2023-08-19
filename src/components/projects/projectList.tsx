import type { Project } from 'gql/graphql'
import type { DateFormatter } from 'lib/formatDate'

import ProjectListItem from './projectListItem'

interface ProjectListProps extends Pick<DateFormatter, 'noDay'> {
  projects: Array<Project | null>
}

const ProjectList = ({ noDay, projects }: ProjectListProps) => {
  return (
    <ul className="relative">
      {projects.map((project) => {
        if (!project) {
          return null
        }
        return (
          <ProjectListItem
            key={project.sys.id}
            project={project}
            noDay={noDay}
          />
        )
      })}
    </ul>
  )
}

export default ProjectList
