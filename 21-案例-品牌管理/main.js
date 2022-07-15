import Vue from 'vue'//引入Vue
import App from './App.vue'//引入根文件

Vue.config.productionTip = false//console.log提示

import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
