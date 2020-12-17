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
//store
import store from "./store";
import userMixin from './mixins/user-mixin.js'


Vue.use(Vuelidate)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mixins:[userMixin],
  router,
  store,
  render: h => h(App)
})
