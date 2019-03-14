import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Tools extends React.Component{
    constructor() {
        super()
        this.state = { count: 0 }
    }
    render() {
        return(
            <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div>
            <h1>Tools</h1> 
            <p>Based on WCAG 2.1, here is a compilation of tools, which are organized by each guideline.</p>

            <h2> <Link to="/perceivable">Perceivable</Link></h2> 
            <h2><Link to="/operable">Operable</Link></h2>
            <h2><Link to="/understandable">Understandable</Link></h2>
           <h2> <Link to="/conformance">Conformance</Link></h2>

          </div>
          </Layout>
        )
    }
}
export default Tools