import { FaTerminal } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'

import type { HomePageProps } from 'app/page'
import ContentSection from 'components/elements/contentSection'
import Stack from 'components/elements/stack'

import * as local from './statusConstants'

export default function Status({
  statusContent,
}: Pick<HomePageProps, 'statusContent'>) {
  return (
    <ContentSection className="px-4 md:px-8">
      <Stack direction="vertical">
        <h2 className="flex items-center mt-0 gap-2">
          {local.STATUS}
          <FaTerminal size={15} className="motion-safe:animate-pulse" />
        </h2>
        {statusContent && statusContent.text ? (
          <Stack direction="vertical" id="status-text">
            <ReactMarkdown
              components={{
                a: ({ ...props }) => <a className="underline" {...props} />,
              }}
            >
              {statusContent.text}
            </ReactMarkdown>
          </Stack>
        ) : null}
      </Stack>
    </ContentSection>
  )
}
