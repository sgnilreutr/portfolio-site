import type { HomePageProps } from 'app/page'
import ContentSection from 'components/elements/contentSection'
import Stack from 'components/elements/stack'

import * as local from './latestProjectsConstants'
import ProjectList from '../projectList'

const LatestProjects = ({
  latestProjectContent,
}: Pick<HomePageProps, 'latestProjectContent'>) => {
  if (!latestProjectContent) {
    return null
  }

  return (
    <ContentSection
      withDarkBackground
      className="border dark:border-zinc-800 border-transparent px-4 md:px-8"
    >
      <Stack direction="vertical" spacing="colossal">
        <h2 className="pb-4">{local.SECTION_HEADER}</h2>

        <ProjectList projects={latestProjectContent} noDay />
      </Stack>
    </ContentSection>
  )
}

export default LatestProjects
