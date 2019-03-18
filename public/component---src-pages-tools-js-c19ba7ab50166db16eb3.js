(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(151),c=a(157),s=a(155),u=function(e){function t(){var t;return(t=e.call(this)||this).state={count:0},t}return r()(t,e),t.prototype.render=function(){return o.a.createElement(c.a,null,o.a.createElement(s.a,{title:"Home",keywords:["gatsby","application","react"]}),o.a.createElement("h1",null,"Tools"),o.a.createElement("p",null,"Based on ",o.a.createElement("a",{href:"https://www.w3.org/TR/WCAG21/"}," WCAG 2.1"),", here is a compilation of resources and tools that are organized by each guideline."),o.a.createElement("h2",null,"Perceivable"),o.a.createElement("p",null,' WCAG Guideline: "Information and user interface components must be presentable to users in ways they can perceive."',o.a.createElement("p",null),o.a.createElement("p",null," What it means: Users, regardless of disability, need to be able to use your application and access all content."),o.a.createElement("p",null," What you need to do: You must provide text alternatives for any non-text content and make it easier for visually or audibly impaired users to access your content. "),o.a.createElement(l.a,{to:"/perceivable"},"toolkit")," "),o.a.createElement("h2",null," Operable"),o.a.createElement("p",null,o.a.createElement(l.a,{to:"/operable"},"toolkit")),o.a.createElement("h2",null," Understandable"),o.a.createElement("p",null,o.a.createElement(l.a,{to:"/understandable"},"toolkit")),o.a.createElement("h2",null,"Conformance"),o.a.createElement("p",null,o.a.createElement(l.a,{to:"/conformance"},"toolkit")))},t}(o.a.Component);t.default=u},151:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(32),c=a.n(l);a.d(t,"a",function(){return c.a});a(152);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},153:function(e){e.exports={data:{site:{siteMetadata:{title:"a11y"}}}}},154:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},155:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(159),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},156:function(e){e.exports={data:{site:{siteMetadata:{title:"a11y",description:"An accessible website about accessibility ",author:"@gatsbyjs"}}}}},157:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(151),s=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"blue",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t),i.a.createElement("ul",{style:{listStyle:"none",float:"right"}},i.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},i.a.createElement(c.a,{style:{color:"white",textDecoration:"none",fontSize:"x-large"},to:"/"},"Home")),i.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},i.a.createElement(c.a,{style:{color:"white",textDecoration:"none",fontSize:"x-large"},to:"/about"},"About")),i.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},i.a.createElement(c.a,{style:{color:"white",textDecoration:"none",fontSize:"x-large"},to:"/tools"},"Tools"))))))};s.propTypes={siteTitle:l.a.string},s.defaultProps={siteTitle:""};var u=s,m=(a(158),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null)))},data:n})});m.propTypes={children:l.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-tools-js-c19ba7ab50166db16eb3.js.map