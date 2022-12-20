import ReactMarkdown from 'react-markdown'

import type { ComponentText, Hyperlink, Project } from '__generated__/graphql'

const ERROR_MESSAGE = 'Something went wrong.'

const ContentCreator = ({
  content,
}: {
  content: ComponentText | Hyperlink | null
}) => {
  if (content && 'text' in content) {
    return <ReactMarkdown>{content.text ?? ''}</ReactMarkdown>
  } else if (
    content &&
    'link' in content &&
    content?.link &&
    content?.linkName
  ) {
    return (
      <pre>
        <a href={content.link}>{content.linkName}</a>
      </pre>
    )
  }
  return null
}

const Projectcard = ({ item }: { item: Project }) => {
  const { title, date, contentCollection } = item

  const pageContent = () => {
    return contentCollection?.items && contentCollection.items.length > 0 ? (
      contentCollection.items.map((item) => (
        <ContentCreator key={item?.sys.id} content={item} />
      ))
    ) : (
      <div>{ERROR_MESSAGE}</div>
    )
  }

  return (
    <article className="project-container">
      <div className="project-header">
        <h3>{title}</h3>
        <p style={{ fontSize: '0.7rem', margin: 0 }}>{date}</p>
      </div>
      {pageContent()}
    </article>
  )
}

export default Projectcard
