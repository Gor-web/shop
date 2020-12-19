import Vue from 'vue'
import Router from 'vue-router'
//404 error
import NotFound from "../components/404/NotFound";
//Auth routes
import authRoutes from '../components/auth/auth_routes.js'
//User routes
import userRoutes from '../components/pages/user-routes.js'

import auth from "../middlewares/auth";
import guest from "../middlewares/guest";

Vue.use(Router)
const router = new Router({
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

router.beforeEach((to, from, next) => {
  console.log(to.meta.middleware)
   if (to.meta.middleware) {
     if (to.meta.middleware.includes('auth')) {
       auth({next,router})
     } else if (to.meta.middleware.includes('guest')) {
       guest({from, next, router})
     }
   }
});
export default router
