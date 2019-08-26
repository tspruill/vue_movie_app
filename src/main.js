import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
//import MdCard from 'vue-material/dist/components'

Vue.config.productionTip = false
Vue.use(VueMaterial)
//Vue.use(MdCard)
new Vue({
  render: h => h(App),
}).$mount('#app')
