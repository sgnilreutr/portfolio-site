import React from "react"
import * as local from "../../constants/recentTechConstants"

const RecentTech = () => {
  return (
    <section className="container">
      <h2 className="section-header">{local.SECTION_HEADER}</h2>
      <div className="tech-container">
        {local.CONTENT_ARRAY &&
          local.CONTENT_ARRAY.length > 0 &&
          local.CONTENT_ARRAY.map((item, index) => {
            return (
              <div key={index}>
                <i className="hover_effect">{item.icon}</i>
                <h3>{item.header}</h3>
                <p>{item.paragraph}</p>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default RecentTech
