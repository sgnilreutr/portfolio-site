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
      spacing="huge"
    >
      {nonHyperlinks.map((item) => {
        return <ContentCreator key={item?.sys.id} content={item} />
      })}
      <div>
        <h4 className="text-lg font-bold">Links</h4>
        <Stack wrap>
          {hyperlinks.map((item) => {
            return <ContentCreator key={item?.sys.id} content={item} />
          })}
        </Stack>
      </div>
    </Stack>
  )
}

interface ProjectDetailProps {
  item: Project
}

const ProjectDetail = ({ item }: ProjectDetailProps) => {
  const { title, date, contentCollection } = item

  return (
    <article>
      <Stack direction="vertical" className="!gap-12">
        <Stack direction="vertical" spacing="none">
          <h1>{title}</h1>
          <p className="text-xs">{dateFormatter({ date })}</p>
        </Stack>
        <PageContent contentCollection={contentCollection} />
      </Stack>
    </article>
  )
}

export default ProjectDetail
