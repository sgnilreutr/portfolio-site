import { ComponentText, Hyperlink } from 'gql/graphql'
import StyledLink from 'components/elements/styledLink'
import ReactMarkdown from 'react-markdown'
import { FiArrowUpRight } from 'react-icons/fi'
import Stack from 'components/elements/stack'

interface ContentCreatorProps {
  content: ComponentText | Hyperlink | null
}

const ContentCreator = ({ content }: ContentCreatorProps) => {
  if (content && 'text' in content && content.text) {
    return <ReactMarkdown>{content.text}</ReactMarkdown>
  } else if (
    content &&
    'link' in content &&
    content?.link &&
    content?.linkName
  ) {
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
