import { ComponentImage, ComponentText, Hyperlink } from 'gql/graphql'
import StyledLink from 'components/elements/styledLink'
import ReactMarkdown from 'react-markdown'
import { FiArrowUpRight } from 'react-icons/fi'
import Stack from 'components/elements/stack'
import ImageComponent from 'components/elements/image'

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
          ul: ({ node, ...props }) => <ul className="list-disc" {...props} />,
        }}
      >
        {content.text}
      </ReactMarkdown>
    )
  }
  if ('image' in content && content.image) {
    return <div className="mx-auto"><ImageComponent image={content.image} /></div>
  }
  if ('link' in content && content?.link && content?.linkName) {
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
