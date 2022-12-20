import * as local from 'constants/allProjectsConstants'
import Link from 'next/link'

import Projectcard from './projectCard'

import type { IProjects } from 'pages/projects'

const AllProjects = ({ projectContent }: IProjects) => {
  return (
    <div className="project-overview">
      <div className="project-overview-header-button">
        <h1 className="section-header">{local.SECTION_HEADER}</h1>
        <Link href="/">{local.BUTTON_HOME}</Link>
      </div>
      <div className="container-attention">
        {projectContent && projectContent.length > 0 ? (
          projectContent.map((item) => {
            if (item) {
              return <Projectcard key={item.sys.id} item={item} />
            }
            return null
          })
        ) : (
          <small>{local.NO_PROJECTS}</small>
        )}
      </div>
    </div>
  )
}

export default AllProjects
