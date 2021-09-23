import React from "react"
import { FaTerminal } from "react-icons/fa"
import * as local from "../../constants/statusConstants"

const Status = () => {
  return (
    <section
      className="container"
      data-sal="slide-right"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <h2 className="section-header">
        {local.STATUS}
        <FaTerminal size={15} />
      </h2>
      <p>
        {local.STATUS_PT1}
        <br></br>
        <br></br>
        {local.STATUS_PT2}
      </p>
    </section>
  )
}

export default Status
