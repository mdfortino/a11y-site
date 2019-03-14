import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Accessibility</h1>
    <h2> "“Before you release a website, tab through it. If you cannot see where you are on the page after each tab; you're not finished yet. #a11y" - Michiel Bijl</h2>
    
    <h2> What is accessibility? </h2> 
    <p> From W3C: Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. More specifically, people can:

perceive, understand, navigate, and interact with the Web
contribute to the Web
Web accessibility encompasses all disabilities that affect access to the Web, including:

auditory
cognitive
neurological
physical
speech
visual
Web accessibility also benefits people without disabilities, for example:

people using mobile phones, smart watches, smart TVs, and other devices with small screens, different input modes, etc.
older people with changing abilities due to ageing
people with “temporary disabilities” such as a broken arm or lost glasses
people with “situational limitations” such as in bright sunlight or in an environment where they cannot listen to audio
people using a slow Internet connection, or who have limited or expensive bandwidth</p>
    <p>According to the W3C: “web accessibility means that people with disabilities can use the web” (source) regardless of the disability. Reaching that level of access is the goal of the Web Content Accessibility Guidelines (WCAG) 2.1, which is the current applicable standard from the W3C.</p>

    <p> When websites and web tools are properly designed and coded, people with disabilities can use them. However, currently many sites and tools are developed with accessibility barriers that make them difficult or impossible for some people to use.</p> 

    <p>Making the web accessible benefits individuals, businesses, and society. International web standards define what is needed for accessibility. </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage