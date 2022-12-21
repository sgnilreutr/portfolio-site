import * as local from './allProjectsConstants'
import Link from 'next/link'

import Projectcard from '../projectCard'

import type { IProjects } from 'pages/projects'

const AllProjects = ({ projectContent }: IProjects) => {
  return (
    <div className="pt-20">
      <div className="flex flex-row flex-wrap items-center justify-between mb-4 rounded-xl">
        <h1 className="mt-0 mb-4">{local.SECTION_HEADER}</h1>
        <Link href="/">{local.BUTTON_HOME}</Link>
      </div>
      <div className="px-10 py-8 mx-12 my-0 text-white bg-black dark:text-zinc-400">
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
      </div>
    </div>
  )
}

export default AllProjects
