import React from "react"
import { Link } from "gatsby"
import "./about.css" 
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h2> "The failure to address issues of accessibility for persons with physical, sensory, and cognitive disabilities ultimately threatens to segregate people with disabilities as the permanent second-class citizens of the information age."</h2>

    <h2> What is accessibility? </h2>

    <p> Web accessibility means that people with disabilities can use the web regardless of the disability. Reaching that level of access is the goal of the Web Content Accessibility Guidelines (WCAG) 2.1, which is the current applicable standard from the W3C.</p>

    <p> When websites and web tools are properly designed and coded, people with disabilities can use them. However, currently many sites and tools are developed with accessibility barriers that make them difficult or impossible for some people to use.</p> 

    <p>Making the web accessible benefits individuals, businesses, and society. International web standards define what is needed for accessibility. </p>

    <p>Good accessibility or "a11y" is crucial to making sure all users can access the content in your sites and applications. Making sure you consider accessibility at the start of your process will ensure that your final product is more polished and works for more people. </p>


    <p> Source:<a href = "https://www.w3.org/TR/WCAG21/"> Web Content Accessibility Guidelines</a>
    </p>
    <h2> Why does it matter? </h2>
<p>Beyond an issue of legal compliance and inclusion, it is proven that businesses that integrate accessibility are more likely to be innovative, inclusive enterprises that reach more people with positive brand messaging that meets emerging global legal requirements.</p>

<p> A research study of Fortune 100 companies indicates that disability inclusion, as part of an overall diversity strategy, is common practice among high performing businesses.</p>

<p> When accessibility is part of strategic planning, businesses are better equipped for success in our connected world of commerce, academia, and civic engagement. </p> 

<p> Source:<a href = "https://www.w3.org/WAI/business-case/"> The Business Case for Digital Accessibility</a> </p> 

<h2> How can this site  help you? </h2>
<p> This site aims to break down the legal jargon into digestable guides and tools that everyone --developer, business leader, human-- can use to make accessible web formats...because accessibility should be accessible.</p> 
 <p> Click on the boxes below to learn more about each guideline</p>
 {/* <div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
  <div class="container">
    <h4><b>Perceivable</b></h4> 
    <p>Learn more</p> 
  </div>

 <Link to="/perceivable"></Link> 
            <h2> Operable</h2>
            <p><Link to="/operable">toolkit</Link></p>
            <h2> Understandable</h2>
            <p><Link to="/understandable">toolkit</Link></p>
            <h2>Robust</h2> 
            <p><Link to="/conformance">toolkit</Link></p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage