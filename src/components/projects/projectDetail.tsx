import Stack from 'components/elements/stack'
import type { Entry, Maybe, Project } from 'gql/graphql'
import dateFormatter from 'lib/formatDate'

import ContentCreator from './helpers/ContentCreator'

const ERROR_MESSAGE = 'Something went wrong.'
const LINKS_HEADER = 'links'

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
      <div className="space-y-4">
        <h4 className="text-md font-bold">{LINKS_HEADER}</h4>
        <Stack wrap>
          {hyperlinks.map((item) => {
            return <ContentCreator key={item.sys.id} content={item} />
          })}
        </Stack>
      </div>
    </Stack>
  )
}

interface ProjectDetailProps {
  project: Project
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const { title, contentCollection } = project
  const date =
    project.date && typeof project.date === 'string' ? project.date : ''

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
