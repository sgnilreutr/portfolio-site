import { ComponentText, Hyperlink } from 'gql/graphql'
import StyledLink from 'components/elements/styledLink'
import ReactMarkdown from 'react-markdown'

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
        <StyledLink href={content.link}>{content.linkName}</StyledLink>
      </pre>
    )
  }
  return null
}

export default ContentCreator
