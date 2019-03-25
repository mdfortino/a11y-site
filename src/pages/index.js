import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div role="banner">
    <h1> a11y </h1> 
    <h1>Let's build accessible websites...</h1>
    <h2>because accessibility should be accessible.</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `5rem` }}>
    </div>
    </div>
    {/* <Link to="/about">START HERE</Link> */}
    <div> 
    </div>
  </Layout>
)

export default IndexPage
