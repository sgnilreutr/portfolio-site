import ContentSection from 'components/elements/contentSection'
import Stack from 'components/elements/stack'
import {
  CalendlySocial,
  GithubSocial,
  LinkedInSocial,
  TwitterSocial,
} from 'components/socials/socials'
import HeroImage from './heroImage'
import { HomePageProps } from 'app/page'

const Hero = ({ heroContent }: Pick<HomePageProps, 'heroContent'>) => {
  if (!heroContent) {
    return null
  }
  const { image, mainTitle, subTitle } = heroContent

  return (
    <ContentSection className="px-4 md:px-8 py-4 md:py-8 md:pt-32 lg:pt-40">
      <div>
        {mainTitle ? (
          <h1 className="text-2xl md:text-3xl">{mainTitle}</h1>
        ) : null}
      </div>
      {subTitle ? (
        <p className="mb-0 text-xl leading-6 md:text-1xl lg:text-2xl">
          {subTitle}
        </p>
      ) : null}
      <div className="flex pt-16">
        <div className="block max-w-sm m-auto">
          <HeroImage image={image} />
        </div>
      </div>
      <Stack align="center" justify="center" spacing="large">
        <GithubSocial />
        <LinkedInSocial />
        <CalendlySocial />
        <TwitterSocial />
      </Stack>
    </ContentSection>
  )
}

export default Hero
