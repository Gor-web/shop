<template>
  <div class="announcement-container">
    <table class="table">
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Salary</th>
        <th>Deadline</th>
        <th>Action</th>
      </tr>


    <tr v-for="(announce,i) in announcementData" :key="i">
        <td>{{announce.title}}</td>
        <td>{{announce.description}}</td>
        <td>{{announce.salary}}</td>
        <td>{{announce.deadline}}</td>
      <button>Edit</button>
      <button @click="deleteAnnouncemet(announce.id)">Delete</button>
    </tr>
    </table>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Announcement",
    data() {
      return {
        announcementData: []
      }
    },
    mounted() {
      const token = `Bearer ${localStorage.getItem('access_token')}`
      axios.get('http://127.0.0.1:8000/api/announcement/allAnnouncements', {
        headers: {
          'Authorization': token
        }
      }).then(res => {
        this.announcementData = res.data
        console.log(res)
      }).catch(err => {
        alert(err.response.data)
      })
    },
    methods: {
      deleteAnnouncemet(id) {
        const token = `Bearer ${localStorage.getItem('access_token')}`
        axios.get('http://127.0.0.1:8000/api/announcement/delete/' + id, {
          headers: {
            'Authorization': token
          }
        }).then(res => {
          this.announcementData = this.announcementData.filter(item => item.id !== id)
        }).catch(err => {
          alert(err.response.data)
        })
      },


    }
  }
</script>

<style scoped>

</style>
