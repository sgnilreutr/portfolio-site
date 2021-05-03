import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Projectcard from './projectCard'
// import Gronebach from './projects/gronebach'
// import ZuivereKoek from './projects/zuiverekoek'
// import Omnia from './projects/omnia'

const NO_PROJECTS = 'No projects found.'

const LatestProjects = () => {
  const { projects } = useStaticQuery(graphql`
    query {
      projects: allContentfulProject {
        edges {
          node {
            title
            content {
              ... on ContentfulComponentText {
                id
                internalName
                text {
                  text
                }
              }
              ... on ContentfulHyperlink {
                id
                link
                linkName
              }
            }
            date(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  `)

  console.log(projects)

  const { edges } = projects

  const mappedProjects =
    projects && edges.length > 0 ? (
      edges.map((item, index) => <Projectcard item={item} />)
    ) : (
      <small>{NO_PROJECTS}</small>
    )

  return <>{mappedProjects}</>
}

export default LatestProjects
