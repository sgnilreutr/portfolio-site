import type { ProjectCollection } from '__generated__/graphql'
import Layout from 'components/layout'
import AllProjects from 'components/projects/allProjects/allProjects'
import getMultipleProjectData from 'lib/graphql/api/getMultipleProjectData'

export interface ProjectsProps {
  projectContent: ProjectCollection['items']
}

const Projects = ({ projectContent }: ProjectsProps) => {
  return (
    <Layout>
      {projectContent ? <AllProjects projectContent={projectContent} /> : null}
    </Layout>
  )
}

export default Projects

export async function getStaticProps() {
  const projectData = await getMultipleProjectData()

  return {
    props: {
      projectContent: projectData?.projectCollection?.items,
    },
  }
}
