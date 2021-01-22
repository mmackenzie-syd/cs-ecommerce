import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../home/Products.vue'
import Details from '../home/Details.vue'
import Cart from '../home/Cart.vue'
import Login from '../account/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Products
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/details/:idProduct',
    name: 'Details',
    component: Details
  }
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
