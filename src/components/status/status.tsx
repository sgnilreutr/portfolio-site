import { IIndex } from 'pages'
import { FaTerminal } from 'react-icons/fa'
import * as local from '../../constants/statusConstants'

const Status = ({ statusContent }: Pick<IIndex, 'statusContent'>) => {
  // const { status } = useStaticQuery(graphql`
  //   query {
  //     status: contentfulComponentText(internalName: { eq: "Status" }) {
  //       text {
  //         text
  //       }
  //     }
  //   }
  // `)

  return (
    <section className="container">
      <h2 className="section-header">
        {local.STATUS}
        <FaTerminal size={15} />
      </h2>
      {statusContent && statusContent?.text ? (
        <p>{statusContent.text}</p>
      ) : null}
    </section>
  )
}

export default Status
