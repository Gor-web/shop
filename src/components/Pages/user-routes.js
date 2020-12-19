import User from "./User";
import Announcement from "./Announcement";

export default [
  {
    path:'/user',
    name:'User',
    component:User,
    meta: {middleware: ['auth']}
  },
  {
    path:'/announcement',
    name:'Announcement',
    component:Announcement,
    meta: {middleware: ['auth']}
  }
]
