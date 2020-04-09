import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugin/vant'
import './plugin/element-ui'
import DemoBlock from '@/components/ElDemoBlock'
import ZvCheckbox from 'packages/checkbox'
import 'highlight.js/styles/color-brewer.css'
import '@/assets/styles/common.css'

Vue.config.productionTip = false
Vue.component('DemoBlock', DemoBlock)
Vue.component('ZvCheckbox', ZvCheckbox)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
