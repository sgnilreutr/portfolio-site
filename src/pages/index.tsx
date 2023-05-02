import Hero from 'components/hero/hero'
import LatestProjects from 'components/projects/latestProjects/latestProjects'
import SEO from 'components/seo'
import Status from 'components/status/status'
import getHeroData from 'lib/graphql/api/getHeroData'
import getMultipleProjectData from 'lib/graphql/api/getMultipleProjectData'
import getStatusData from 'lib/graphql/api/getStatusData'

import Stack from 'components/elements/stack'
import Podcast from 'components/podcast/Podcast'
import type { InferGetStaticPropsType } from 'next'
import { getPlaiceholder } from 'plaiceholder'

const SEO_TITLE = 'Software thinker'

export type IndexProps = InferGetStaticPropsType<typeof getStaticProps>

const Index = ({
  heroContent,
  statusContent,
  latestProjectContent,
}: IndexProps) => {
  return (
    <>
      <SEO title={SEO_TITLE} />
      <Hero heroContent={heroContent} />
      <Stack direction="vertical" spacing="huge">
        <Status statusContent={statusContent} />
        <LatestProjects latestProjectContent={latestProjectContent} />
        <Podcast />
      </Stack>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const LIMIT_PROJECTS = 4
  const heroData = await getHeroData()
  const statusData = await getStatusData()
  const latestProjectData = await getMultipleProjectData(LIMIT_PROJECTS)

  const enhanceMainBanner = async () => {
    if (heroData?.mainBanner?.image?.url) {
      const { base64 } = await getPlaiceholder(heroData?.mainBanner?.image?.url)
      return {
        ...heroData?.mainBanner,
        image: { ...heroData?.mainBanner?.image, blurDataURL: base64 },
      }
    }
    return undefined
  }

  const test = await enhanceMainBanner()
  console.log({ enhanceMainBanner })

  return {
    props: {
      heroContent: await enhanceMainBanner(),
      statusContent: statusData?.componentText,
      latestProjectContent: latestProjectData?.projectCollection?.items,
      // notableWorkList:
      //   notableWorkData?.notableWork?.notableWorkListCollection?.items,
    },
  }
}
