import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LatestProjects from "../components/projects/latestProjects"
import RecentTech from "../components/recentTech/recentTech"
import Hero from "../components/hero/hero"
import Status from "../components/status/status"
import NotableWork from "../components/notableWork/notableWork"

const SEO_TITLE = "Software thinker"

const Index = () => {
  return (
    <Layout>
      <SEO title={SEO_TITLE} />
      <Hero />
      <div>
        <Status />
        <LatestProjects />
        <RecentTech />
        <NotableWork />
      </div>
    </Layout>
  )
}

export default Index
