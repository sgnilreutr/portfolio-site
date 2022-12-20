import Hero from 'components/hero/hero'
import Layout from 'components/layout'
import NotableWork from 'components/notableWork/notableWork'
import LatestProjects from 'components/projects/latestProjects'
import RecentTech from 'components/recentTech/recentTech'
import SEO from 'components/seo'
import Status from 'components/status/status'
import convertDateInProjects from 'lib/convertDateInProjects'
import getHeroData from 'lib/graphql/api/getHeroData'
import getNotableWorkData from 'lib/graphql/api/getNotableWorkData'
import getProjectData from 'lib/graphql/api/getProjectData'
import getStatusData from 'lib/graphql/api/getStatusData'

import type {
  MainBanner,
  NotableItemCollection,
  ProjectCollection,
  Query,
} from '__generated__/graphql'
const SEO_TITLE = 'Software thinker'

export interface IIndex {
  heroContent: MainBanner
  statusContent: Query['componentText']
  latestProjectContent: ProjectCollection['items']
  notableWorkList: NotableItemCollection['items']
}

const Index = ({
  heroContent,
  statusContent,
  latestProjectContent,
  notableWorkList,
}: IIndex) => {
  return (
    <Layout>
      <SEO title={SEO_TITLE} />
      {heroContent ? <Hero heroContent={heroContent} /> : null}
      <div>
        {statusContent ? <Status statusContent={statusContent} /> : null}
        {latestProjectContent ? (
          <LatestProjects latestProjectContent={latestProjectContent} />
        ) : null}
        <RecentTech />
        {notableWorkList ? (
          <NotableWork notableWorkList={notableWorkList} />
        ) : null}
      </div>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const notableWorkData = await getNotableWorkData()
  const heroData = await getHeroData()
  const statusData = await getStatusData()

  const LIMIT_PROJECTS = 4
  const latestProjectData = await getProjectData(LIMIT_PROJECTS)

  return {
    props: {
      heroContent: heroData?.mainBanner,
      statusContent: statusData?.componentText,
      latestProjectContent: convertDateInProjects(latestProjectData),
      notableWorkList:
        notableWorkData?.notableWork?.notableWorkListCollection?.items,
    },
  }
}
