import React from "react"
import * as local from "../../constants/notableWorkConstants"

const NotableWork = () => {
  return (
    <section
      data-sal="slide-up"
      data-sal-delay="700"
      data-sal-easing="ease"
      data-sal-duration="400"
      className="container-attention"
    >
      <h2 className="section-header">{local.SECTION_HEADER}</h2>
      <div>
        {local.CONTENT_ARRAY &&
          local.CONTENT_ARRAY.length > 0 &&
          local.CONTENT_ARRAY.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item.text}</li>
              </ul>
            )
          })}
      </div>
    </section>
  )
}

export default NotableWork
