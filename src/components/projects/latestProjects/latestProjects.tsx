import * as project from '../allProjects/allProjectsConstants'
import * as local from './latestProjectsConstants'

import Projectcard from '../projectCard'

import type { IIndex } from 'pages'
import ContentSection from 'components/elements/contentSection'
import Stack from 'components/elements/stack'
import InternalLink from 'components/elements/InternalLink'

const PROJECT_LINK = '/projects'

const LatestProjects = ({
  latestProjectContent,
}: Pick<IIndex, 'latestProjectContent'>) => {
  return (
    <ContentSection withDarkBackground>
      <Stack direction="vertical" spacing="colossal">
        <h2 className="pb-4">{local.SECTION_HEADER}</h2>

        {latestProjectContent.length > 0 ? (
          latestProjectContent.map((item) => {
            if (item) {
              return <Projectcard key={item.sys.id} item={item} />
            }
            return null
          })
        ) : (
          <span className="text-sm">{project.NO_PROJECTS}</span>
        )}

        {latestProjectContent.length > 3 && (
          <div className="flex flex-col items-center justify-center">
            <InternalLink href={PROJECT_LINK}>
              {local.VIEW_ARCHIVE}
            </InternalLink>
          </div>
        )}
      </Stack>
    </ContentSection>
  )
}

export default LatestProjects
