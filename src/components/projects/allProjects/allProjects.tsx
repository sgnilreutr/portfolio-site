import ContentSection from 'components/elements/contentSection'
import Stack from 'components/elements/stack'
import type { ProjectsProps } from 'pages/projects'
import Projectcard from '../projectDetail'
import * as local from './allProjectsConstants'

const AllProjects = ({ projectContent }: ProjectsProps) => {
  return (
    <div>
      <div className="px-4 my-0">
        <h1>{local.SECTION_HEADER}</h1>
      </div>
      <ContentSection withDarkBackground>
        <Stack direction="vertical" className="!gap-16 px-4 md:px-8">
          {projectContent && projectContent.length > 0 ? (
            projectContent.map((item) => {
              if (item) {
                return <Projectcard key={item.sys.id} item={item} />
              }
              return null
            })
          ) : (
            <span className="text-sm">{local.NO_PROJECTS}</span>
          )}
        </Stack>
      </ContentSection>
    </div>
  )
}

export default AllProjects
