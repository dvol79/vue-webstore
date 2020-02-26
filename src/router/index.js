import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../component/Main.vue'
import Form from '../components/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'iMain',
    component: Main,
    props: true
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
