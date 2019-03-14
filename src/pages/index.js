import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Let's build accessible websites...</h1>
    <p>because accessibility should be accessible.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    
    </div>
    <Link to="/about">Learn more</Link>
  </Layout>
)

export default IndexPage
