import Vue from 'vue'
import Router from 'vue-router'
import authRoutes from '../components/Auth/auth-routes.js'
//not found
import NotFound from "../components/404/NotFound";




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    ...authRoutes,
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
