import AllProjects from 'components/projects/allProjects/allProjects'
import SEO from 'components/seo'
import type { ProjectCollection } from 'gql/graphql'
import getMultipleProjectData from 'lib/graphql/api/getMultipleProjectData'

export interface ProjectsProps {
  projectContent: ProjectCollection['items']
}

const SEO_TITLE = 'Projects'
const SEO_DESCRIPTION = 'My Personal Project Portfolio'

const Projects = ({ projectContent }: ProjectsProps) => {
  return (
    <>
      <SEO title={SEO_TITLE} image={SEO_DESCRIPTION} />
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
