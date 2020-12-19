import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user:null,
    announcement:null
  },
  getters: {
    user: (state) => {
      return state.user
    }
  },
  announcement:(state)=> {
    return state.announcement
  },
  mutations: {
setUser(state,user) {
  state.user = user;
},
setAnnouncement(state,announcement) {
  state.announcement = announcement
}
  }
})

export default store;
