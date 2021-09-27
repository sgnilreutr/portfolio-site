import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as local from "../../constants/recentTechConstants"
import { FaGithub, FaAtlassian, FaReact } from "react-icons/fa"
import { SiGraphql, SiRedux } from "react-icons/si"

interface recentTechItemType {
  internalName: string
  text: {
    text: string
  }
}

const ICON_SIZE = 40

const techIconMap: { [key: string]: {} } = {
  Atlassian: <FaAtlassian size={ICON_SIZE} />,
  React: <FaReact size={ICON_SIZE} />,
  GraphQL: <SiGraphql size={ICON_SIZE} />,
  Redux: <SiRedux size={ICON_SIZE} />,
  Github: <FaGithub size={ICON_SIZE} />,
}

const RecentTech = () => {
  const { contentfulTechStack } = useStaticQuery(graphql`
    query {
      contentfulTechStack {
        internalName
        activeSkills {
          internalName
          text {
            text
          }
        }
      }
    }
  `)

  return (
    <section className="container">
      <h2 className="section-header">{local.SECTION_HEADER}</h2>
      <div className="tech-container">
        {contentfulTechStack &&
          contentfulTechStack.activeSkills.length > 0 &&
          contentfulTechStack.activeSkills.map(
            (item: recentTechItemType, index: number) => {
              return (
                <div key={index}>
                  {item.internalName && (
                    <i className="hover_effect">
                      {techIconMap[item.internalName]}
                    </i>
                  )}
                  {item.internalName && <h3>{item.internalName}</h3>}
                  {item.text.text && <p>{item.text.text}</p>}
                </div>
              )
            }
          )}
      </div>
    </section>
  )
}

export default RecentTech
