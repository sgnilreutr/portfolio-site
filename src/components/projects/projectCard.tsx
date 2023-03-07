import Stack from 'components/elements/stack'
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
      <pre className="overflow-auto text-sm">
        <a
          className="underline duration-100 ease-in bg-transparent hover:text-orange-500 active:text-orange-500 dark:hover:text-orange-700 dark:active:text-orange-700"
          href={content.link}
        >
          {content.linkName}
        </a>
      </pre>
    )
  }
  return null
}

const Projectcard = ({ item }: { item: Project }) => {
  const { title, date, contentCollection } = item

  const pageContent = () => {
    return (
      <Stack direction="vertical">
        {contentCollection?.items && contentCollection.items.length > 0 ? (
          contentCollection.items.map((item) => (
            <ContentCreator key={item?.sys.id} content={item} />
          ))
        ) : (
          <div>{ERROR_MESSAGE}</div>
        )}
      </Stack>
    )
  }

  return (
    <article>
      <Stack direction="vertical" spacing="small">
        <Stack direction="vertical" spacing="mini">
          <h3>{title}</h3>
          <p className="text-xs">{date}</p>
        </Stack>
        {pageContent()}
      </Stack>
    </article>
  )
}

export default Projectcard
