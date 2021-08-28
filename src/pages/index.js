import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LatestProjects from "../components/projects/latest-projects"
import RecentTech from "../components/recentTech/recentTech"
import Hero from "../components/hero/hero"
import Status from "../components/status/status"
import NotableWork from "../components/notableWork/notableWork"

const Index = () => {
  return (
    <Layout>
      <SEO title="Software thinker" />
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
