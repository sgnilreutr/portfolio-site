import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as local from '../../constants/notableWorkConstants'
import Badge from '../elements/badge'

interface WorkListItemType {
  notableListItem: string
  label: 'dev' | 'pm'
}

const NotableWork = () => {
  const { WorkList } = useStaticQuery(graphql`
    query {
      WorkList: contentfulNotableWork(internalName: { eq: "Notable work" }) {
        internalName
        notableWorkList {
          notableListItem
          label
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
                  <li>
                    <span style={{ marginRight: '10px' }}>
                      {item.notableListItem}
                    </span>
                    <Badge label={item.label} variant={item.label} />
                  </li>
                </ul>
              )
            }
          )}
      </div>
    </section>
  )
}

export default NotableWork
