import InternalLink from 'components/elements/internalLink'
import ContentSection from 'components/elements/contentSection'
import Stack from 'components/elements/stack'
import { PROJECT_LINK } from 'lib/globalConstants'
import type { IndexProps } from 'pages'
import ProjectList from '../projectList'
import * as local from './latestProjectsConstants'

const LatestProjects = ({
  latestProjectContent,
}: Pick<IndexProps, 'latestProjectContent'>) => {
  if (!latestProjectContent) {
    return null
  }

  const hasMoreProjects = latestProjectContent.length > 3

  return (
    <ContentSection withDarkBackground>
      <Stack direction="vertical" spacing="colossal">
        <h2 className="pb-4">{local.SECTION_HEADER}</h2>

        <ProjectList projects={latestProjectContent} />

        {hasMoreProjects ? (
          <div className="flex flex-col items-center justify-center">
            <InternalLink
              href={PROJECT_LINK}
              className="!text-zinc-200 hover:!bg-zinc-600"
            >
              {local.VIEW_ARCHIVE}
            </InternalLink>
          </div>
        ) : null}
      </Stack>
    </ContentSection>
  )
}

export default LatestProjects
