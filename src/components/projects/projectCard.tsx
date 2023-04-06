import Stack from 'components/elements/stack'
import type { Entry, Maybe, Project } from '__generated__/graphql'
import ContentCreator from './helpers/ContentCreator'

const ERROR_MESSAGE = 'Something went wrong.'

const PageContent = ({
  contentCollection,
}: NonNullable<Pick<Project, 'contentCollection'>>) => {
  if (!contentCollection?.items) {
    return <div>{ERROR_MESSAGE}</div>
  }

  const [hyperlinks, nonHyperlinks] = contentCollection.items.reduce<
    [Array<Entry>, Array<Maybe<Entry>>]
  >(
    (acc, item) => {
      if (item && '__typename' in item && item.__typename === 'Hyperlink') {
        acc[0].push(item)
      } else {
        acc[1].push(item)
      }
      return acc
    },
    [[], []]
  )

  return (
    <Stack direction="vertical" className="pb-4 border-b border-neutral-800">
      {nonHyperlinks.map((item) => {
        return <ContentCreator key={item?.sys.id} content={item} />
      })}
      <Stack wrap>
        {hyperlinks.map((item) => {
          return <ContentCreator key={item?.sys.id} content={item} />
        })}
      </Stack>
    </Stack>
  )
}

const Projectcard = ({ item }: { item: Project }) => {
  const { title, date, contentCollection } = item

  return (
    <article>
      <Stack direction="vertical" spacing="small">
        <Stack direction="vertical" spacing="mini">
          <h3>{title}</h3>
          <p className="text-xs">{date}</p>
        </Stack>
        <PageContent contentCollection={contentCollection} />
      </Stack>
    </article>
  )
}

export default Projectcard
