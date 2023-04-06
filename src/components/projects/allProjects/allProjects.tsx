import * as local from './allProjectsConstants'
import Link from 'next/link'

import Projectcard from '../projectCard'

import type { IProjects } from 'pages/projects'
import ContentSection from 'components/elements/contentSection'
import Stack from 'components/elements/stack'
import InternalLink from 'components/elements/InternalLink'

const AllProjects = ({ projectContent }: IProjects) => {
  return (
    <div className="pt-20">
      <Stack align="center" justify="between">
        <h1 className="mt-0 mb-4">{local.SECTION_HEADER}</h1>
        <InternalLink href="/">{local.BUTTON_HOME}</InternalLink>
      </Stack>
      <ContentSection withDarkBackground>
        <Stack direction="vertical" spacing="colossal">
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
