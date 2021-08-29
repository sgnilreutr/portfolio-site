import React from "react"
import isEmpty from "lodash/isEmpty"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as local from "../../constants/heroConstants"
import * as global from "../../constants/globalConstants"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Hero = () => {
  const { HeroImage } = useStaticQuery(graphql`
    query {
      HeroImage: file(relativePath: { eq: "wave_robbert.png" }) {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const heroImage = () => {
    if (!isEmpty(HeroImage)) {
      return (
        <figure>
          <GatsbyImage
            image={HeroImage.childImageSharp.gatsbyImageData}
            alt={HeroImage.name}
          />
        </figure>
      )
    } else {
      return <span>{local.ERROR_LOADING_IMAGE}</span>
    }
  }

  return (
    <section className="hero-container">
      <div>{local.HERO_TITLE && <h1>{local.HERO_TITLE}</h1>}</div>
      {local.HERO_DESCRIPTION && (
        <p className="description">{local.HERO_DESCRIPTION}</p>
      )}
      <div style={{ display: `flex`, marginTop: "2rem" }}>
        <div className="hero-image">{heroImage()}</div>
      </div>
      <div className="hero-buttons">
        <a
          className="hover_effect social-icons"
          href={global.GITHUB_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          className="hover_effect social-icons"
          href={global.LINKEDIN_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  )
}

export default Hero
