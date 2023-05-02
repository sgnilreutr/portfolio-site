import type { Project } from 'gql/graphql'
import ProjectListItem from './projectListItem'

interface ProjectListProps {
  projects: Array<Project | null>
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <ul className="relative">
      {projects.map((project) => {
        if (!project) {
          return null
        }
        return <ProjectListItem key={project.sys.id} project={project} />
      })}
    </ul>
  )
}

export default ProjectList
