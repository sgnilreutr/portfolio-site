import type { IIndex } from 'pages'
import { FaTerminal } from 'react-icons/fa'

import * as local from './statusConstants'

const Status = ({ statusContent }: Pick<IIndex, 'statusContent'>) => {
  return (
    <section className="px-10 py-4 mx-12 my-0 md:py-8 lg:py-12">
      <h2 className="flex items-baseline mt-0 mb-4">
        {local.STATUS}
        <span className="flex pl-2">
          <FaTerminal size={15} />
        </span>
      </h2>
      {statusContent && statusContent?.text ? (
        <p>{statusContent.text}</p>
      ) : null}
    </section>
  )
}

export default Status
