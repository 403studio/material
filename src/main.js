import Vue from 'vue'
import entry from './App'
import VueRouter from 'vue-router'
import hljs from 'highlight.js'
import routes from '@/router/route.config'
import DemoBlock from '@/components/DemoBlock'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SideNav from '@/components/SideNav'
import FooterNav from '@/components/FooterNav'
import title from '@/i18n/title'
import ZvCheckbox from 'packages/checkbox'

// import 'packages/theme-chalk/src/index.scss'
// import './demo-styles/index.scss'
import 'highlight.js/scss/color-brewer.scss'
import './assets/styles/common.scss'
import './assets/styles/fonts/style.css'
import icon from './icon.json'

import '@/plugin/element-ui'
import '@/plugin/vant'

Vue.use(VueRouter)
Vue.component('demo-block', DemoBlock)
Vue.component('main-footer', Footer)
Vue.component('main-header', Header)
Vue.component('side-nav', SideNav)
Vue.component('footer-nav', FooterNav)

Vue.component('ZvCheckbox', ZvCheckbox)

const globalEle = new Vue({
  data: { $isEle: false } // 是否 ele 用户
})

window.ga = function () {
  console.log(arguments)
}

Vue.mixin({
  computed: {
    $isEle: {
      get: () => (globalEle.$data.$isEle),
      set: (data) => { globalEle.$data.$isEle = data }
    }
  }
})

Vue.prototype.$icon = icon // Icon 列表页用

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
})

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  const data = title[route.meta.lang]
  for (const val in data) {
    if (new RegExp('^' + val, 'g').test(route.name)) {
      document.title = data[val]
      return
    }
  }
  document.title = 'Element'
})

new Vue({ // eslint-disable-line
  ...entry,
  router
}).$mount('#app')
