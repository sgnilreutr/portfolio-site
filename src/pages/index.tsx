import Hero from 'components/hero/hero'
// import NotableWork from 'components/notableWork/notableWork'
import LatestProjects from 'components/projects/latestProjects/latestProjects'
import SEO from 'components/seo'
import Status from 'components/status/status'
import getHeroData from 'lib/graphql/api/getHeroData'
import getMultipleProjectData from 'lib/graphql/api/getMultipleProjectData'
// import getNotableWorkData from 'lib/graphql/api/getNotableWorkData'
import getStatusData from 'lib/graphql/api/getStatusData'

import Stack from 'components/elements/stack'
import Podcast from 'components/podcast/Podcast'
import type { InferGetStaticPropsType } from 'next'

const SEO_TITLE = 'Software thinker'

export type IndexProps = InferGetStaticPropsType<typeof getStaticProps>

const Index = ({
  heroContent,
  statusContent,
  latestProjectContent,
}: // notableWorkList,
IndexProps) => {
  return (
    <>
      <SEO title={SEO_TITLE} />
      <Hero heroContent={heroContent} />
      <Stack direction="vertical" spacing="huge">
        <Status statusContent={statusContent} />
        <LatestProjects latestProjectContent={latestProjectContent} />
        {/* <NotableWork notableWorkList={notableWorkList} /> */}
        <Podcast />
      </Stack>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const heroData = await getHeroData()
  const statusData = await getStatusData()
  const LIMIT_PROJECTS = 4
  const latestProjectData = await getMultipleProjectData(LIMIT_PROJECTS)
  // const notableWorkData = await getNotableWorkData()

  return {
    props: {
      heroContent: heroData?.mainBanner,
      statusContent: statusData?.componentText,
      latestProjectContent: latestProjectData?.projectCollection?.items,
      // notableWorkList:
      //   notableWorkData?.notableWork?.notableWorkListCollection?.items,
    },
  }
}
