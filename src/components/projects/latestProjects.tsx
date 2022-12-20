import * as project from 'constants/allProjectsConstants'
import * as local from 'constants/latestProjectsConstants'
import Link from 'next/link'

import Projectcard from './projectCard'
import * as S from './projectStyles'

import type { IIndex } from 'pages'

const PROJECT_LINK = '/projects'

const LatestProjects = ({
  latestProjectContent,
}: Pick<IIndex, 'latestProjectContent'>) => {
  return (
    <section className="container-attention">
      <h2 className="section-header">{local.SECTION_HEADER}</h2>
      {latestProjectContent.length > 0 ? (
        latestProjectContent.map((item) => {
          if (item) {
            return <Projectcard key={item.sys.id} item={item} />
          }
          return null
        })
      ) : (
        <small>{project.NO_PROJECTS}</small>
      )}
      {latestProjectContent.length > 3 && (
        <S.ButtonContainer>
          <Link href={PROJECT_LINK}>{local.VIEW_ARCHIVE}</Link>
        </S.ButtonContainer>
      )}
    </section>
  )
}

export default LatestProjects
