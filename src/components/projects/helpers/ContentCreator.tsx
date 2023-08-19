import { FiArrowUpRight } from 'react-icons/fi'
import ReactMarkdown from 'react-markdown'

import ImageComponent from 'components/elements/image'
import Stack from 'components/elements/stack'
import StyledLink from 'components/elements/styledLink'
import type { ComponentImage, ComponentText, Hyperlink } from 'gql/graphql'

interface ContentCreatorProps {
  content: ComponentImage | ComponentText | Hyperlink | null
}

const ContentCreator = ({ content }: ContentCreatorProps) => {
  if (!content) {
    return null
  }
  if ('text' in content && content.text) {
    return (
      <ReactMarkdown
        components={{
          ul: ({ ...props }) => <ul className="list-disc" {...props} />,
        }}
      >
        {content.text}
      </ReactMarkdown>
    )
  }
  if ('image' in content && content.image) {
    const regex = /logo/i // i flag for case insensitive matching
    const isLogo = regex.test(content.title ?? '')
    return (
      <div className="mx-auto">
        <ImageComponent
          image={content.image}
          customSize={isLogo ? 120 : undefined}
          noDefaultStyles={isLogo}
        />
      </div>
    )
  }
  if ('link' in content && content.link && content.linkName) {
    return (
      <pre className="overflow-auto text-sm">
        <StyledLink href={content.link}>
          <Stack align="center" spacing="mini">
            {content.linkName} <FiArrowUpRight />
          </Stack>
        </StyledLink>
      </pre>
    )
  }
  return null
}

export default ContentCreator
