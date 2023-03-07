import * as local from './allProjectsConstants'
import Link from 'next/link'

import Projectcard from '../projectCard'

import type { IProjects } from 'pages/projects'
import ContentSection from 'components/elements/contentSection'
import Stack from 'components/elements/stack'

const AllProjects = ({ projectContent }: IProjects) => {
  return (
    <div className="pt-20">
      <Stack align="center" justify="between">
        <h1 className="mt-0 mb-4">{local.SECTION_HEADER}</h1>
        <Link
          href="/"
          className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
        >
          {local.BUTTON_HOME}
        </Link>
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
