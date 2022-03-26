import React from 'react'
import isEmpty from 'lodash/isEmpty'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as global from '../../constants/globalConstants'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import StyledSpan from '../elements/screenReaderSpan'

const Hero = () => {
  const { HeroImage, HeroText } = useStaticQuery(graphql`
    query {
      HeroImage: file(relativePath: { eq: "Robbert_Tuerlings.jpg" }) {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
      HeroText: contentfulMainBanner(internalName: { eq: "Hero" }) {
        mainTitle
        subTitle
      }
    }
  `)

  const heroImage = () => {
    if (!isEmpty(HeroImage)) {
      return (
        <figure>
          <GatsbyImage
            image={HeroImage.childImageSharp.gatsbyImageData}
            alt={`An profile image of the owner of this portfolio, ${HeroImage.name.replace(
              '_',
              ' '
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
      <div>
        {HeroText && HeroText.mainTitle && <h1>{HeroText.mainTitle}</h1>}
      </div>
      {HeroText && HeroText.subTitle && (
        <p className="description">{HeroText.subTitle}</p>
      )}
      <div style={{ display: `flex`, marginTop: '2rem' }}>
        <div className="hero-image">{heroImage()}</div>
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
      </div>
    </section>
  )
}

export default Hero
