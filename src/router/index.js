import Vue from 'vue'
import Router from 'vue-router'
//Auths with another pages
import authRoutes from '../components/Auth/auth-routes.js'
import userRoutes from '../components/Pages/user-routes'
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
    ...userRoutes,
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
