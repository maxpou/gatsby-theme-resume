import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/Resume"
import useSiteResume from "../hooks/use-site-resume"

const IndexPage = () => {
  const resume = useSiteResume()

  return (
    <Layout>
      <SEO title={`${resume.basics.name} resume`} />
      <Resume {...resume} />
    </Layout>
  )
}

export default IndexPage
