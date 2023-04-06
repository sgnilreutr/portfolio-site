import ContentSection from 'components/elements/contentSection'
import Image from 'next/image'
import Logo from '../../../public/recursive.png'
import Stack from 'components/elements/stack'
import StyledLink from 'components/elements/styledLink'

import { FiArrowUpRight } from 'react-icons/fi'

const PODCAST_NAME = 'Recursive podcast'
const PODCAST_DESCRIPTION =
  'My friend Albin Groen and I have a podcast where we discuss technology, design, side-projects, and various other topics.'
const PODCAST_URL = 'https://www.recursivepod.com/'
const LINK_TEXT = 'Visit our site'

const Podcast = () => {
  return (
    <ContentSection className="bg-orange-500 dark:bg-orange-500/40">
      <Stack align="center" direction="vertical">
        <Image
          alt={PODCAST_NAME}
          className="max-w-[150px] md:max-w-[200px] rounded-xl border-t border-neutral-800"
          src={Logo}
        />
        <Stack justify="center" align="center" direction="vertical">
          <Stack
            align="center"
            className="text-white dark:text-orange-100"
            direction="vertical"
          >
            <h2 className="mt-0 mb-4">{PODCAST_NAME}</h2>
            <div className="max-w-md">
              <p>{PODCAST_DESCRIPTION}</p>
            </div>
          </Stack>
          <StyledLink
            href={PODCAST_URL}
            className="p-4 text-black dark:text-white hover:text-neutral-700"
          >
            <span className="flex flex-row items-center gap-2">
              {LINK_TEXT} <FiArrowUpRight />
            </span>
          </StyledLink>
        </Stack>
      </Stack>
    </ContentSection>
  )
}

export default Podcast
