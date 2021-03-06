import Vue from "vue";
import axios from "axios";

export default Vue.mixin({
  methods: {
    storeUser() {

      console.log(this.$store)
      const token=`Bearer ${localStorage.getItem('access_token')}`
      axios.post('http://127.0.0.1:8000/api/auth/me',null,{
        headers:{
          'Authorization':token
        }
      }).then(res=>{
        localStorage.setItem('user',JSON.stringify(res.data));
        this.$store.commit('setUser',res.data);
      })
        .catch(err=> {
          console.log('error!')
        })
    },

  },
  computed: {
    getUser() {
      return JSON.parse(localStorage.getItem('user')) || this.$store.getters.user
    },

  }
})

