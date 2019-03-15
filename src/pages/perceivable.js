import React, { Component } from 'react';

class perceivable extends Component {
    render() {
        return (
            <div>
            <h1> Perceivability</h1>
            <h2> 1.1 Text Alternatives </h2>
            <p> Adding alt text means avoiding errors from an Accessibility Scan, but it's important to be intentional when providing descriptive alt text that provides better meaning to your images.</p>
            <img src="/src/images/text-alternatives.jpg" alt="image of non-text content and text alternative explanation from w3.org"></img>
            <p> Here are resources to help you fulfill Level A 1.1: </p>
            <ol> 
            <li> 
            <a href = "https://www.a11ywithlindsey.com/blog/writing-alternative-text-matters/"> Writing Alternative Text Matters by Lindsey Kopacz</a>
            </li> 
            <li> 
            <a href = "https://www.w3.org/WAI/tutorials/images/tips/"> Text Alternatives Tips and Tricks </a>
            </li> 
            <li> 
            <a href = "https://www.w3.org/WAI/tutorials/images/tips/"> Text Alternatives Tips and Tricks </a>
            </li> 
            </ol>
            <h2> 1.2 Time-Based Media</h2>
            <h2> 1.3 Adaptable</h2>
            <h2> 1.4 Distinguishable</h2>
            <p>Examples: </p>
            </div>
        );
    }
}

export default perceivable;