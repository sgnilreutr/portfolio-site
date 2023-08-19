import { getPlaiceholder } from 'plaiceholder'

import ContentWrapper from 'components/elements/contentWrapper'
import Stack from 'components/elements/stack'
import Hero from 'components/hero/hero'
import Podcast from 'components/podcast/Podcast'
import LatestProjects from 'components/projects/latestProjects/latestProjects'
import Status from 'components/status/status'
import { SITE_NAME, metadata } from 'constants/seoConstants'
import getHeroData from 'lib/graphql/api/getHeroData'
import getMultipleProjectData from 'lib/graphql/api/getMultipleProjectData'
import getStatusData from 'lib/graphql/api/getStatusData'

async function getData() {
  const heroData = await getHeroData()
  const statusData = await getStatusData()
  const latestProjectData = await getMultipleProjectData()

  const enhanceMainBanner = async () => {
    if (heroData.mainBanner?.image?.url) {
      const buffer = await fetch(heroData.mainBanner.image.url).then(
        async (res) => Buffer.from(await res.arrayBuffer())
      )
      const { base64 } = await getPlaiceholder(buffer)
      return {
        ...heroData.mainBanner,
        image: { ...heroData.mainBanner.image, blurDataURL: base64 },
        imageUrl: heroData.mainBanner.image.url,
      }
    }
    return undefined
  }

  return {
    heroContent: await enhanceMainBanner(),
    statusContent: statusData.componentText,
    latestProjectContent: latestProjectData.projectCollection?.items,
    // notableWorkList:
    //   notableWorkData?.notableWork?.notableWorkListCollection?.items,
  }
}

const title = 'Software T(h)inker'
export async function generateMetadata() {
  const { heroContent } = await getData()

  const seoTitle = `${SITE_NAME} | ${title}`

  return {
    ...metadata,
    title: seoTitle,
    openGraph: {
      ...metadata.openGraph,
      images: [heroContent?.imageUrl ?? ''],
      title: seoTitle,
    },
    twitter: {
      ...metadata.twitter,
      images: [heroContent?.imageUrl ?? ''],
      title: seoTitle,
    },
  }
}

export type HomePageProps = Awaited<ReturnType<typeof getData>>

export default async function Home() {
  const { heroContent, statusContent, latestProjectContent } = await getData()
  return (
    <ContentWrapper>
      <Hero heroContent={heroContent} />
      <Stack direction="vertical" spacing="huge">
        <Status statusContent={statusContent} />
        <LatestProjects latestProjectContent={latestProjectContent} />
        <Podcast />
      </Stack>
    </ContentWrapper>
  )
}
