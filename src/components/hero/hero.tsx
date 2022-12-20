import * as global from 'constants/globalConstants'
import { FaGithub, FaLinkedin, FaRegCalendarCheck } from 'react-icons/fa'
import StyledSpan from 'components/elements/screenReaderSpan'
import Image from 'next/image'
import type { IIndex } from 'pages'

const Hero = ({ heroContent }: Pick<IIndex, 'heroContent'>) => {
  const { image, mainTitle, subTitle } = heroContent

  const HeroImage = () => {
    if (image && image?.url && image?.fileName) {
      return (
        <figure>
          <Image
            width={200}
            height={200}
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
    <section className="hero-container">
      <div>{mainTitle ? <h1>{mainTitle}</h1> : null}</div>
      {subTitle ? <p className="description">{subTitle}</p> : null}
      <div style={{ display: `flex`, marginTop: '2rem' }}>
        <div className="hero-image">
          <HeroImage />
        </div>
      </div>
      <div className="hero-buttons">
        <a
          className="hover_effect social-icons"
          href={global.GITHUB_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} aria-hidden="true" focusable="false" />
          <StyledSpan>{global.SR_GITHUB}</StyledSpan>
        </a>
        <a
          className="hover_effect social-icons"
          href={global.LINKEDIN_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} aria-hidden="true" focusable="false" />
          <StyledSpan>{global.SR_LINKEDIN}</StyledSpan>
        </a>
        <a
          className="hover_effect social-icons"
          href={global.CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRegCalendarCheck size={30} aria-hidden="true" focusable="false" />
          <StyledSpan>{global.SR_CALENDLY}</StyledSpan>
        </a>
      </div>
    </section>
  )
}

export default Hero
