import * as local from './allProjectsConstants'

import type { ProjectsProps } from 'pages/projects'
import ContentSection from 'components/elements/contentSection'
import Stack from 'components/elements/stack'
import Projectcard from '../projectDetail'

const AllProjects = ({ projectContent }: ProjectsProps) => {
  return (
    <div>
      <div className="px-4 mx-2 my-0 md:px-10 md:mx-12">
        <h1>{local.SECTION_HEADER}</h1>
      </div>
      <ContentSection withDarkBackground>
        <Stack direction="vertical" className="!gap-16">
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
