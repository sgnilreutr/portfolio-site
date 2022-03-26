import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Projectcard from './projectCard'
import * as local from '../../constants/allProjectsConstants'
import { ItemType } from './projectTypes'

const AllProjects = () => {
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

  const { edges } = projects

  const mappedProjects = () => {
    return projects && edges && edges.length > 0 ? (
      edges.map((item: ItemType, index: string) => {
        return <Projectcard key={index} item={item} />
      })
    ) : (
      <small>{local.NO_PROJECTS}</small>
    )
  }

  return (
    <div className="project-overview">
      <div className="project-overview-header-button">
        <h1 className="section-header">{local.SECTION_HEADER}</h1>
        <Link to="/">{local.BUTTON_HOME}</Link>
      </div>
      <div className="container-attention">{mappedProjects()}</div>
    </div>
  )
}

export default AllProjects
