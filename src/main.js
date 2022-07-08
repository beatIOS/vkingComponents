import Vue from 'vue'
import App from './App.vue'
import vkingui from './packages/index'
Vue.use(vkingui)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
