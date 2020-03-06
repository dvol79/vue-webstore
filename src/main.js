import Vue from 'vue'
import App from './App.vue'
import router from './router'
require('./assets/app.css')
import { store } from './store/store.js'
import './firebase.js'
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
