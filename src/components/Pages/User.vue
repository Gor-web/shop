<template>
<div class="user-container">
  <div style="text-align: center">User page</div>
  <div class="user_main_data">
    <div class="user_data">Name:<strong>{{user.firstname}}</strong></div>
    <div class="user_data">LastName:<strong>{{user.lastname}}</strong></div>
    <div class="user_data">Email:<strong>{{user.email}}</strong></div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
name: "User",
  data(){
    return{
      user:null
    }
  },
  mounted() {
    const token=`Bearer ${localStorage.getItem('access_token')}`
    axios.post('http://127.0.0.1:8000/api/auth/me',null,{
      headers:{
        'Authorization':token
      }
    }).then(res=>{
      console.log(res)
      this.user = res.data
    })
  },
}
</script>

<style scoped>
.user_main_data {
  margin: auto;
  width: 60%;
  border: 3px solid #620027;
  padding: 10px;
}
.user_data {
text-align: center;
}
</style>
