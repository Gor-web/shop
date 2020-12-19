<template>
  <div class="user-container">
    <div style="text-align: center">User page</div>
    <div class="user_main_data">
      <div class="user_data">Name:<strong>{{getUser && getUser.firstname}}</strong></div>
      <div class="user_data">LastName:<strong>{{getUser && getUser.lastname}}</strong></div>
      <div class="user_data">Email:<strong>{{getUser && getUser.email}}</strong></div>
      <button v-if="getUser" @click="logout">LogOut</button>
    </div>
    <div>Add Announcements</div>
    <form action="" class="form-group w-50">
      <input type="text" placeholder="title" v-model="announcements.title" class="form-control">
      <textarea name="" id="" cols="3" rows="3" placeholder="text" v-model="announcements.description" class="form-control"></textarea>
      <input type="date" placeholder="deadline" v-model="announcements.deadline" class="form-control">
      <input type="text" placeholder="salary" v-model="announcements.salary" class="form-control">
      <button @click="createAnnouncement">Add</button>
    </form>
  </div>
</template>

<script>

  import axios from "axios";

  export default {
    name: "User",
    data() {
      return {
        announcements:{
          title:'',
          description:'',
          deadline:'',
          salary:'',
        }
      }
    },
    mounted() {
      this.storeUser()
    },

    methods: {

      createAnnouncement() {
        const token=`Bearer ${localStorage.getItem('access_token')}`
        axios.post('http://127.0.0.1:8000/api/announcement/create',this.announcements,{
          headers:{
            'Authorization':token
          }
        }).then(res=>{
          this.$router.push("/announcement")
        }).catch(err=>{
          alert(err.response.data)
        })
      },

      logout() {
        const token=`Bearer ${localStorage.getItem('access_token')}`
        axios.post('http://127.0.0.1:8000/api/auth/me',null,{
          headers:{
            'Authorization':token
          }
        })
        .then(() => {
          localStorage.removeItem('user')
          localStorage.removeItem('access_token')
          this.$store.commit('setUser',null);
          this.$router.push('/login')
        })
      }
    }

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
