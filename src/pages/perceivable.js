import React, { Component } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo";
import Alt from "../images/text-alternatives.jpg"

class perceivable extends Component {
    render() {
        return (
            <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <div>
            <h1> Perceivability</h1>
            <h2> Guideline 1.1: Text Alternatives </h2>
            <p> Adding alt text means avoiding errors from an Accessibility Scan, but not all alt text is created equally. The text should be functional and provide an equivalent user experience, not necessarily describe the image. (For example, appropriate text alternative for a search button  would be "search", not "magnifying glass".)</p>
            {/* resource: https://www.w3.org/WAI/test-evaluate/preliminary/#images */}
            <img src={Alt} alt="text-alternative description from w3.org" />
            <p> Here are resources to help you fulfill Level A 1.1: </p>
            <ol> 
            <li> 
            <a href = "https://www.a11ywithlindsey.com/blog/writing-alternative-text-matters/"> Writing Alternative Text Matters by Lindsey Kopacz</a>
            </li> 
            <li> 
            <a href = "https://www.w3.org/WAI/tutorials/images/tips/"> Text Alternatives Tips and Tricks </a>
            </li> 
            <li> 
            <a href = "https://support.siteimprove.com/hc/en-gb/articles/115000013031-Accessibility-Image-Alt-text-best-practices"> Accessibility: Image Alt text best practices </a>
            </li> 
            </ol>
            <li> 
            <a href = "https://webaim.org/standards/wcag/checklist" role = "button"> Checklist</a> 
            </li>
            <li> 
            <a href ="https://webaim.org/techniques/alttext/#context" role = "button"> Example </a>
            </li>
            <h2> Tools </h2>
            <ol> 
            <li> 
            <a href = "http://wave.webaim.org/extension/"> Wave Toolbar</a>
            <p> places overlay on current page, revealing images without ALT text</p>
            </li> 
            <li> 
            <a href = "https://www.w3.org/WAI/tutorials/images/tips/"> Text Alternatives Tips and Tricks </a>
            </li> 
            <li> 
            <a href = "https://support.siteimprove.com/hc/en-gb/articles/115000013031-Accessibility-Image-Alt-text-best-practices"> Accessibility: Image Alt text best practices </a>
            </li> 
            </ol>
         

            <h2> 1.2 Time-Based Media</h2>

            <h2> 1.3 Adaptable</h2>
            <h2> 1.4 Distinguishable</h2>
           
            </div>
            </Layout> 
        );
    }
}

export default perceivable;