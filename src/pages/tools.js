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
            <h1>Tools</h1> 
            <p>Based on <a href = "https://www.w3.org/TR/WCAG21/"> WCAG 2.1</a>, here is a compilation of resources and tools that are organized by each guideline.</p>
            <h2>Perceivable</h2> 
            <p> WCAG Guideline: "Information and user interface components must be presentable to users in ways they can perceive."<p/> 
            <p> What it means: Users, regardless of disability, need to be able to use your application and access all content.</p>
            <p> What you need to do: You must provide text alternatives for any non-text content and make it easier for visually or audibly impaired users to access your content. </p>
         
            <Link to="/perceivable">toolkit</Link> </p>
            <h2> Operable</h2>
            <p><Link to="/operable">toolkit</Link></p>
            <h2> Understandable</h2>
            <p><Link to="/understandable">toolkit</Link></p>
            <h2>Conformance</h2> 
            <p><Link to="/conformance">toolkit</Link></p>
            </Layout> 
          
        )
    }
}
export default Tools