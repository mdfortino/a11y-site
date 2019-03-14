const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/gamacbook/wdi/projects/a11y-project/a11y-site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/gamacbook/wdi/projects/a11y-project/a11y-site/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/gamacbook/wdi/projects/a11y-project/a11y-site/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/gamacbook/wdi/projects/a11y-project/a11y-site/src/pages/index.js"))),
  "component---src-pages-tools-js": hot(preferDefault(require("/Users/gamacbook/wdi/projects/a11y-project/a11y-site/src/pages/tools.js"))),
  "component---src-pages-perceivable-js": hot(preferDefault(require("/Users/gamacbook/wdi/projects/a11y-project/a11y-site/src/pages/perceivable.js"))),
  "component---src-pages-operable-js": hot(preferDefault(require("/Users/gamacbook/wdi/projects/a11y-project/a11y-site/src/pages/operable.js"))),
  "component---src-pages-understandable-js": hot(preferDefault(require("/Users/gamacbook/wdi/projects/a11y-project/a11y-site/src/pages/understandable.js"))),
  "component---src-pages-robust-js": hot(preferDefault(require("/Users/gamacbook/wdi/projects/a11y-project/a11y-site/src/pages/robust.js"))),
  "component---src-pages-conformance-js": hot(preferDefault(require("/Users/gamacbook/wdi/projects/a11y-project/a11y-site/src/pages/conformance.js")))
}

