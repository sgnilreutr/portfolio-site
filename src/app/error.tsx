'use client'

import ContentWrapper from 'components/elements/contentWrapper'
import InternalLink from 'components/elements/internalLink'
import Stack from 'components/elements/stack'
import { FiArrowRight } from 'react-icons/fi'

const NOT_FOUND_TITLE = (
  <>
    Hold your horses{' '}
    <span role="img" aria-label="horse">
      🐴
    </span>
  </>
)
const NOT_FOUND_DESCRIPTION = "I haven't made that page (yet)."
const BACK_BUTTON = 'Take me back!'

export default function Error() {
  return (
      <ContentWrapper>
        <div className="px-10 py-4 mx-12 my-0 md:py-8 md:pt-32 lg:pt-40">
          <Stack direction="vertical" align="center" spacing="enormous">
            <h1 className="text-5xl md:text-6xl text-center">
              {NOT_FOUND_TITLE}
            </h1>
            <p className="mb-0 text-xl leading-6">{NOT_FOUND_DESCRIPTION}</p>
            <div className="flex items-center justify-center mt-10">
              <InternalLink href="/">
                <Stack align="center" spacing="mini">
                  {BACK_BUTTON}
                  <FiArrowRight />
                </Stack>
              </InternalLink>
            </div>
          </Stack>
        </div>
      </ContentWrapper>

  )
}
