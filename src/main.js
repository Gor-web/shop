import Vue from 'vue'
import App from './App'
import router from './router'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
//validation(vuelidate)
import Vuelidate from 'vuelidate'
//axios
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuelidate)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
