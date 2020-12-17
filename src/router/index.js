import Vue from 'vue'
import Router from 'vue-router'
//404 error
import NotFound from "../components/404/NotFound";
//Auth routes
import authRoutes from '../components/auth/auth_routes.js'
//User routes
import userRoutes from '../components/pages/user-routes.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login',
    },
    ...authRoutes,
    ...userRoutes,
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})
