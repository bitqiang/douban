import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import bookIndex from '../pages/book/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/book/index',
      name:'bookIndex',
      component:bookIndex
    }
  ]
})
