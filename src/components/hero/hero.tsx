import {
  CalendlySocial,
  GithubSocial,
  LinkedInSocial,
  TwitterSocial,
} from 'components/socials/socials'
import * as global from 'constants/globalConstants'
import Image from 'next/image'

import type { IIndex } from 'pages'

const Hero = ({ heroContent }: Pick<IIndex, 'heroContent'>) => {
  const { image, mainTitle, subTitle } = heroContent

  const HeroImage = () => {
    if (image && image?.url && image?.fileName) {
      return (
        <figure className="mb-6">
          <Image
            width={image?.width ?? 400}
            height={image?.height ?? 400}
            className="shadow-2xl rounded-xl dark:brightness-75"
            src={image.url}
            alt={`An profile image of the owner of this portfolio, ${image.fileName.replace(
              '.png',
              ''
            )}`}
          />
        </figure>
      )
    } else {
      return <span>{global.ERROR_LOADING_IMAGE}</span>
    }
  }

  return (
    <section className="px-4 md:px-10 py-4 mx-2 md:mx-12 my-0 md:py-8 md:pt-32 lg:pt-40">
      <div>
        {mainTitle ? (
          <h1 className="text-5xl md:text-6xl">{mainTitle}</h1>
        ) : null}
      </div>
      {subTitle ? (
        <p className="mb-0 text-xl leading-6 md:text-3xl lg:text-4xl">
          {subTitle}
        </p>
      ) : null}
      <div className="flex mt-12">
        <div className="block max-w-sm m-auto">
          <HeroImage />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <GithubSocial />
        <LinkedInSocial />
        <CalendlySocial />
        <TwitterSocial />
      </div>
    </section>
  )
}

export default Hero
