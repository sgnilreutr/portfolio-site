import Stack from 'components/elements/stack'
import type { Entry, Maybe, Project } from 'gql/graphql'
import ContentCreator from './helpers/ContentCreator'
import dateFormatter from 'lib/formatDate'

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
    <Stack
      direction="vertical"
      className="pb-4 border-b border-zinc-500 dark:border-zinc-600"
      spacing="large"
    >
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

interface ProjectCardProps {
  item: Project
}

const Projectcard = ({ item }: ProjectCardProps) => {
  const { title, date, contentCollection } = item

  return (
    <article>
      <Stack direction="vertical" spacing="default">
        <Stack direction="vertical" spacing="mini">
          <h3>{title}</h3>
          <p className="text-xs">{dateFormatter({ date })}</p>
        </Stack>
        <PageContent contentCollection={contentCollection} />
      </Stack>
    </article>
  )
}

export default Projectcard
