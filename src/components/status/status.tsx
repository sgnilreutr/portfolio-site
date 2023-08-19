'use client'
import { FaTerminal } from 'react-icons/fa'

import * as local from './statusConstants'
import ContentSection from 'components/elements/contentSection'
import ReactMarkdown from 'react-markdown'
import Stack from 'components/elements/stack'
import { useEffect } from 'react'
import { HomePageProps } from 'app/page'

const changeAnchorStyles = () => {
  const statusText = document.getElementById('status-text')
  if (statusText) {
    const anchorTags = statusText.getElementsByTagName('a')

    for (let i = 0; i < anchorTags.length; i += 1) {
      anchorTags[i]?.classList?.add('underline')
    }
  }
}

const Status = ({ statusContent }: Pick<HomePageProps, 'statusContent'>) => {
  useEffect(() => {
    changeAnchorStyles()
  }, [])

  return (
    <ContentSection className="px-4 md:px-8">
      <Stack direction="vertical">
        <h2 className="flex items-center mt-0 gap-2">
          {local.STATUS}
          <FaTerminal size={15} className="motion-safe:animate-pulse" />
        </h2>
        {statusContent && statusContent?.text ? (
          <Stack direction="vertical" id="status-text">
            <ReactMarkdown>{statusContent.text}</ReactMarkdown>
          </Stack>
        ) : null}
      </Stack>
    </ContentSection>
  )
}

export default Status
