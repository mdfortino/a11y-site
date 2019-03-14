// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/gamacbook/wdi/projects/a11y-project/a11y-site/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/gamacbook/wdi/projects/a11y-project/a11y-site/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("/Users/gamacbook/wdi/projects/a11y-project/a11y-site/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-tools-js": () => import("/Users/gamacbook/wdi/projects/a11y-project/a11y-site/src/pages/tools.js" /* webpackChunkName: "component---src-pages-tools-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/gamacbook/wdi/projects/a11y-project/a11y-site/.cache/data.json")

