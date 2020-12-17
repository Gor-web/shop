import Login from "./Login";
import Register from "./Register";
import guest from "../../middlewares/guest";
import auth from "../../middlewares/auth";
export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {middleware: [guest]}
  },
  {
    path: '/signup',
    name: 'Register',
    component: Register,
    meta: {middleware: [auth]}
  }
]
