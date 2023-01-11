import * as project from '../allProjects/allProjectsConstants'
import * as local from './latestProjectsConstants'
import Link from 'next/link'

import Projectcard from '../projectCard'

import type { IIndex } from 'pages'

const PROJECT_LINK = '/projects'

const LatestProjects = ({
  latestProjectContent,
}: Pick<IIndex, 'latestProjectContent'>) => {
  return (
    <section className="px-4 md:px-10 py-8 mx-2 md:mx-12 my-0 text-white bg-black dark:text-zinc-400 rounded-xl">
      <h2 className="mt-0 mb-4">{local.SECTION_HEADER}</h2>
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
          <Link
            className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
            href={PROJECT_LINK}
          >
            {local.VIEW_ARCHIVE}
          </Link>
        </div>
      )}
    </section>
  )
}

export default LatestProjects
