<template>
  <div class="user-container">
    <div style="text-align: center">User page</div>
    <button @click="showUser">Show</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "User",
  data() {
    return {
      user:''
    }
  },
  methods: {
    async showUser() {
      await axios
        .post('http://127.0.0.1:8000/api/auth/user/1')
        .then(response => (this.info = response));
      console.log(this.info.data)
      }
    }
}
</script>

<style scoped>

</style>
