import * as global from 'constants/globalConstants'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaRegCalendarCheck } from 'react-icons/fa'

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

  const SocialLink = ({
    href,
    icon,
    label,
  }: {
    href: string
    icon: JSX.Element
    label: string
  }) => {
    return (
      <a
        className="mr-4 duration-200 ease-in-out hover:text-orange-500 dark:hover:bg-orange-700 opacity-80 last:mr-0"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
        <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-no-wrap border-0">
          {label}
        </span>
      </a>
    )
  }

  return (
    <section className="px-10 py-4 mx-12 my-0 md:py-8 md:pt-32 lg:pt-40">
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
        <SocialLink
          href={global.GITHUB_LINK}
          icon={<FaGithub size={30} aria-hidden="true" focusable="false" />}
          label={global.SR_GITHUB}
        />
        <SocialLink
          href={global.LINKEDIN_LINK}
          icon={<FaLinkedin size={30} aria-hidden="true" focusable="false" />}
          label={global.SR_LINKEDIN}
        />
        <SocialLink
          href={global.CALENDLY_LINK}
          icon={
            <FaRegCalendarCheck
              size={30}
              aria-hidden="true"
              focusable="false"
            />
          }
          label={global.SR_CALENDLY}
        />
      </div>
    </section>
  )
}

export default Hero
