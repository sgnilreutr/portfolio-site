import React from 'react'

import isEmpty from 'lodash/isEmpty'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  FaJs,
  FaGithub,
  FaSketch,
  FaAtlassian,
  FaTerminal,
} from 'react-icons/fa'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import LatestProjects from '../components/projects/latest-projects'

const IndexPage = () => {
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
      return null
    }
  }

  return (
    <Layout>
      <SEO title="Software thinker" />
      <div className="hero-container">
        <div>
          <h1>Hey there! I'm Robbert</h1>
        </div>
        <p className="description">A Dutch tech savvy analytical human.</p>
        <div style={{ display: `flex`, marginTop: '2rem' }}>
          <div className="hero-image">{heroImage()}</div>
        </div>
      </div>
      <div>
        <div
          className="container"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h2 className="section-header">
            Status <FaTerminal size={15} />
          </h2>
          <p>
            Currently working at Swiftly, as SCRUM Master and Frontend
            developer, and on projects for my own company; Elysium Labs to hone my skills in
            frontend- and backend development, and design. Scroll down to see my
            latest released projects.
            <br></br>
            <br></br>
            In my own time I enjoy reading educational books, learning a new
            language, digging into codes and playing sports.
          </p>
        </div>
        <div
          className="container-attention"
          data-sal="slide-left"
          data-sal-delay="500"
          data-sal-easing="ease"
          data-sal-duration="400"
        >
          <h2 className="section-header">Latest projects</h2>
          <LatestProjects />
        </div>
        <div className="container">
          <h2 className="section-header">Recent tech</h2>
          <div className="tech-container">
            <div
              data-sal="slide-up"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              <i className="hover_effect">
                {' '}
                <FaAtlassian size={40} />{' '}
              </i>
              <h3>Atlassian</h3>
              <p>
                By using my extensive experience with Jira and Confluence I'm
                able to support the development process. The analytical and
                structured approach of matter supports writing down easy to
                understand application logic on a central location in
                Confluence, the development team can consultant it anytime and
                from anywhere.
              </p>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="700"
              data-sal-easing="ease"
            >
              <i className="hover_effect">
                {' '}
                <FaJs size={40} />{' '}
              </i>
              <h3>JavaScript</h3>
              <p>
                With my passion to learn, I have taught myself JavaScript. With
                this I wish to create numerous great products. JavaScript lends
                itself well for advanced application logics and ensuring high
                performance.
              </p>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="800"
              data-sal-easing="ease"
            >
              <i className="hover_effect">
                {' '}
                <FaGithub size={40} />{' '}
              </i>
              <h3>Github</h3>
              <p>
                Github allows me to store my projects online and share them with
                any development team. I aim to become hugely active on Github to
                support Open Source projects. Do you have one for me?
              </p>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="900"
              data-sal-easing="ease"
            >
              <i className="hover_effect">
                {' '}
                <FaSketch size={40} />{' '}
              </i>
              <h3>Sketch</h3>
              <p>
                Designing the next product allows me to align the aimed
                expectations with UI/UX before coding commences. Optimizing
                software flow for all devices, from a small mobile to a large
                desktop.
              </p>
            </div>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="700"
          data-sal-easing="ease"
          data-sal-duration="400"
          className="container-attention"
        >
          <h2 className="section-header">Notable work</h2>
          <div>
            <ul>
              <li>
                Leading the development of an insurance company internal
                systems.
              </li>
              <li>
                Collaborating with a team using Agile methods, to design and
                create a SaaS application.
              </li>
              <li>
                Extending the functionalities of an homegrown Helpdesk
                application.
              </li>
              <li>
                Restructuring and simplifying the entire internal communication
                and documentation flow.
              </li>
              <li>
                Managing the build and release of an international B2B/B2C
                webshop.
              </li>
              <li>
                Creating a module with an easy wizard that generates a broad
                advice ready for their clients.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
