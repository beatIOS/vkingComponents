// 组件入口
import Button from './button.vue'
import Icon from './icon.vue'

const install = Vue => {
  // 在install方法里注册全局组件
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
}

if (typeof window.Vue !== 'undefined') {
  install(Vue)
}
export default {
  install
}
