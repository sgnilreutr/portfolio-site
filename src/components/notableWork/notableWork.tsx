import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as local from "../../constants/notableWorkConstants"

interface WorkListItemType {
  notableListItem: string
}

const NotableWork = () => {
  const { WorkList } = useStaticQuery(graphql`
    query {
      WorkList: contentfulNotableWork(internalName: { eq: "Notable work" }) {
        internalName
        notableWorkList {
          notableListItem
        }
      }
    }
  `)

  return (
    <section className="container-attention">
      <h2 className="section-header">{local.SECTION_HEADER}</h2>
      <div>
        {WorkList &&
          WorkList.notableWorkList.length > 0 &&
          WorkList.notableWorkList.map(
            (item: WorkListItemType, index: number) => {
              return (
                <ul key={index}>
                  <li>{item.notableListItem}</li>
                </ul>
              )
            }
          )}
      </div>
    </section>
  )
}

export default NotableWork
