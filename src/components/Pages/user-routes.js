import User from "./User";
import auth from "../../middlewares/auth";

export default [
  {
    path:'/user',
    name:'User',
    component:User,
    meta: {middleware: [auth]}
  }
]
