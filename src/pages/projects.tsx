import type { ProjectCollection } from 'gql/graphql'
import AllProjects from 'components/projects/allProjects/allProjects'
import getMultipleProjectData from 'lib/graphql/api/getMultipleProjectData'

export interface ProjectsProps {
  projectContent: ProjectCollection['items']
}

const Projects = ({ projectContent }: ProjectsProps) => {
  return (
    <>
      {projectContent ? <AllProjects projectContent={projectContent} /> : null}
    </>
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
