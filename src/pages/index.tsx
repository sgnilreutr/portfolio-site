import Hero from 'components/hero/hero'
import Layout from 'components/layout'
import NotableWork from 'components/notableWork/notableWork'
import LatestProjects from 'components/projects/latestProjects/latestProjects'
import RecentTech from 'components/recentTech/recentTech'
import SEO from 'components/seo'
import Status from 'components/status/status'
import convertDateInProjects from 'lib/convertDateInProjects'
import getHeroData from 'lib/graphql/api/getHeroData'
import getNotableWorkData from 'lib/graphql/api/getNotableWorkData'
import getProjectData from 'lib/graphql/api/getProjectData'
import getStatusData from 'lib/graphql/api/getStatusData'
import getTechStackData from 'lib/graphql/api/getTechStackData'

import type {
  MainBanner,
  NotableItemCollection,
  ProjectCollection,
  Query,
  TechStackCollection,
} from '__generated__/graphql'
import Podcast from 'components/podcast/Podcast'
import Stack from 'components/elements/stack'
const SEO_TITLE = 'Software thinker'

export interface IIndex {
  heroContent: MainBanner
  statusContent: Query['componentText']
  latestProjectContent: ProjectCollection['items']
  recentTechContent: TechStackCollection['items']
  notableWorkList: NotableItemCollection['items']
}

const Index = ({
  heroContent,
  statusContent,
  latestProjectContent,
  recentTechContent,
  notableWorkList,
}: IIndex) => {
  return (
    <Layout>
      <SEO title={SEO_TITLE} />
      {heroContent ? <Hero heroContent={heroContent} /> : null}
      <Stack direction="vertical" spacing="huge">
        {statusContent ? <Status statusContent={statusContent} /> : null}
        {latestProjectContent ? (
          <LatestProjects latestProjectContent={latestProjectContent} />
        ) : null}
        {recentTechContent ? (
          <RecentTech recentTechContent={recentTechContent} />
        ) : null}
        {notableWorkList ? (
          <NotableWork notableWorkList={notableWorkList} />
        ) : null}
        <Podcast />
      </Stack>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const heroData = await getHeroData()
  const statusData = await getStatusData()
  const recentTechData = await getTechStackData()
  const LIMIT_PROJECTS = 4
  const latestProjectData = await getProjectData(LIMIT_PROJECTS)
  const notableWorkData = await getNotableWorkData()

  return {
    props: {
      heroContent: heroData?.mainBanner,
      statusContent: statusData?.componentText,
      latestProjectContent: convertDateInProjects(latestProjectData),
      recentTechContent: recentTechData?.techStackCollection?.items,
      notableWorkList:
        notableWorkData?.notableWork?.notableWorkListCollection?.items,
    },
  }
}
