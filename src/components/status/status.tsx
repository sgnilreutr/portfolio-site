import type { IIndex } from 'pages'
import { FaTerminal } from 'react-icons/fa'

import * as local from './statusConstants'
import ContentSection from 'components/elements/contentSection'
import ReactMarkdown from 'react-markdown'
import Stack from 'components/elements/stack'
import { useEffect } from 'react'

const changeAnchorStyles = () => {
  // if (typeof window === 'object') {
  const statusText = document.getElementById('status-text')
  if (statusText) {
    const anchorTags = statusText.getElementsByTagName('a')

    for (let i = 0; i < anchorTags.length; i += 1) {
      anchorTags[i]?.classList?.add('underline')
    }
  }
  // }
}

const Status = ({ statusContent }: Pick<IIndex, 'statusContent'>) => {
  useEffect(() => {
    changeAnchorStyles()
  }, [])

  return (
    <ContentSection>
      <h2 className="flex items-baseline mt-0 mb-4">
        {local.STATUS}
        <span className="flex pl-2">
          <FaTerminal size={15} />
        </span>
      </h2>
      {statusContent && statusContent?.text ? (
        <Stack direction="vertical" className="" id="status-text">
          <ReactMarkdown>{statusContent.text}</ReactMarkdown>
        </Stack>
      ) : null}
    </ContentSection>
  )
}

export default Status
