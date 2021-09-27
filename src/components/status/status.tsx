import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaTerminal } from "react-icons/fa"
import * as local from "../../constants/statusConstants"

const Status = () => {
  const { status } = useStaticQuery(graphql`
    query {
      status: contentfulComponentText(internalName: { eq: "Status" }) {
        text {
          text
        }
      }
    }
  `)

  return (
    <section className="container">
      <h2 className="section-header">
        {local.STATUS}
        <FaTerminal size={15} />
      </h2>
      {status && status.text.text && <p>{status.text.text}</p>}
    </section>
  )
}

export default Status
