import Layout from 'components/layout'
import AllProjects from 'components/projects/allProjects/allProjects'
import getProjectData from 'lib/graphql/api/getProjectData'
import type { ProjectCollection } from '__generated__/graphql'
import convertDateInProjects from 'lib/convertDateInProjects'

export interface IProjects {
  projectContent: ProjectCollection['items']
}

const Projects = ({ projectContent }: IProjects) => {
  return (
    <Layout>
      {projectContent ? <AllProjects projectContent={projectContent} /> : null}
    </Layout>
  )
}

export default Projects

export async function getStaticProps() {
  const projectData = await getProjectData()

  return {
    props: {
      projectContent: convertDateInProjects(projectData),
    },
  }
}
