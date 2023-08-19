import ContentSection from 'components/elements/contentSection'
import ContentWrapper from 'components/elements/contentWrapper'
import Projectcard from 'components/projects/projectDetail'
import { SITE_NAME, metadata } from 'constants/seoConstants'
import getMultipleProjectData from 'lib/graphql/api/getMultipleProjectData'
import getProjectData from 'lib/graphql/api/getProjectData'

export const dynamicParams = true

export async function generateStaticParams() {
  const projectData = await getMultipleProjectData()

  if (!projectData.projectCollection?.items) {
    return []
  }

  return projectData.projectCollection.items.reduce((projects, project) => {
    if (project?.sys.id) {
      return [...projects, { id: project.sys.id }]
    }
    return projects
  }, [] as Array<{ id: string }>)
}

async function getProject(
  id: NonNullable<
    Awaited<ReturnType<typeof generateStaticParams>>
  >[number]['id']
) {
  if (!id) {
    return null
  }
  const result = await getProjectData(id)
  return result
}

export async function generateMetadata({
  params,
}: {
  params: Awaited<ReturnType<typeof generateStaticParams>>[number]
}) {
  const project = await getProject(params.id)
  const title = `${SITE_NAME} ${
    project?.title && `| ${project.title}`
  }`.replace('undefined', '')

  return {
    ...metadata,
    title,
    openGraph: {
      ...metadata.openGraph,
      title,
    },
    twitter: {
      ...metadata.twitter,
      title,
    },
  }
}

export default async function Project({
  params,
}: {
  params: Awaited<ReturnType<typeof generateStaticParams>>[number]
}) {
  const project = await getProject(params.id)

  if (!project) {
    return <div>404</div>
  }

  return (
    <ContentWrapper>
      <ContentSection>
        <Projectcard project={project} />
      </ContentSection>
    </ContentWrapper>
  )
}
