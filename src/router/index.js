import Vue from 'vue'
import VueRouter from 'vue-router'
import hljs from 'highlight.js'
import navConfig from 'examples/nav.config.json'

Vue.use(VueRouter)

let exampleRoutes = []

Object.keys(navConfig).forEach(key => {
  exampleRoutes = exampleRoutes.concat(navConfig[key])
})
function addComponent (router) {
  router.forEach(route => {
    if (route.items) {
      addComponent(route.items)
      exampleRoutes = exampleRoutes.concat(route.items)
    } else {
      if (route.name === 'site-index') {
        route.component = r =>
          require.ensure([], () => r(require('../../examples/introduce.md')))
      } else {
        route.component = r =>
          require.ensure([], () => r(require(`../../examples/${route.name}.md`)))
          // () => import(`examples/${route.name}.md`)
      }
    }
  })
}

addComponent(exampleRoutes)
exampleRoutes = exampleRoutes.filter(item => item.path)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('examples/introduce.md')
  }
]

const router = new VueRouter({
  routes: [...routes, ...exampleRoutes]
})

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

export default router
