import Vue from 'vue'//引入Vue
import App from './App.vue'//引入根文件

Vue.config.productionTip = false//console.log提示

import Panel from "./components/Panel copy.vue"
//全局注册
Vue.component('PanelGGG', Panel)

//全局注册
Vue.filter('toLow',(val) => {
  return val.toLowerCase()
})

new Vue({
  render: h => h(App),
}).$mount('#app')
