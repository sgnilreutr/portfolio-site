import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Projectcard from "./projectCard"
import * as local from "../../constants/latestProjectsConstants"
import * as project from "../../constants/allProjectsConstants"
import * as S from "./projectStyles"
import { ItemType } from "./projectTypes"

const PROJECT_LINK = "/projects"

const LatestProjects = () => {
  const { projects } = useStaticQuery(graphql`
    query {
      projects: allContentfulProject(limit: 4) {
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
      edges
        .slice(0, 3)
        .map((item: ItemType, index: number) => (
          <Projectcard key={index} item={item} />
        ))
    ) : (
      <small>{project.NO_PROJECTS}</small>
    )

  return (
    <section className="container-attention">
      <h2 className="section-header">{local.SECTION_HEADER}</h2>
      {mappedProjects}
      {projects && edges && edges.length > 3 && (
        <S.ButtonContainer>
          <Link to={PROJECT_LINK}>{local.VIEW_ARCHIVE}</Link>
        </S.ButtonContainer>
      )}
    </section>
  )
}

export default LatestProjects
