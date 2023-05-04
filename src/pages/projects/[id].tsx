import ContentSection from 'components/elements/contentSection'
import ContentWrapper from 'components/elements/contentWrapper'
import Projectcard from 'components/projects/projectDetail'
import SEO from 'components/seo'
import getMultipleProjectData from 'lib/graphql/api/getMultipleProjectData'
import getProjectData from 'lib/graphql/api/getProjectData'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

const Project = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!project) {
    return <div>404</div>
  }

  return (
    <>
      <SEO title={project.title ?? ''} />
      <ContentWrapper>
        <ContentSection>
          <Projectcard item={project} />
        </ContentSection>
      </ContentWrapper>
    </>
  )
}

export default Project

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const id = params?.id as string

  if (!id) {
    return {
      props: {},
    }
  }

  const result = await getProjectData(id)

  if (!result) {
    return {
      props: {},
    }
  }

  return {
    props: result,
  }
}

export async function getStaticPaths() {
  const projectData = await getMultipleProjectData()

  return {
    paths: projectData.projectCollection?.items.map((project) => {
      if (!project) {
        return {
          params: { slug: '404' },
        }
      }
      return {
        params: {
          id: project.sys.id,
        },
      }
    }),
    fallback: false,
  }
}
