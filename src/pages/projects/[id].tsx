import ContentSection from 'components/elements/contentSection'
import Layout from 'components/layout'
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
      <Layout>
        <ContentSection>
          <Projectcard item={project} />
        </ContentSection>
      </Layout>
    </>
  )
}

export default Project

export async function getStaticProps({ params }: GetStaticPropsContext) {
  console.log({ params })
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
