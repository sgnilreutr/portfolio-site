import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Projectcard from "./projectCard"
import * as local from "../../constants/latestProjectsConstants"

const NO_PROJECTS = "No projects found."

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

  const { edges } = projects

  const mappedProjects =
    projects && edges && edges.length > 0 ? (
      edges.map((item, index) => <Projectcard key={index} item={item} />)
    ) : (
      <small>{NO_PROJECTS}</small>
    )

  return (
    <section className="container-attention">
      <h2 className="section-header">{local.SECTION_HEADER}</h2>
      {mappedProjects}
    </section>
  )
}

export default LatestProjects
