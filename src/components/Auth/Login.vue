<template>
  <div class="login-container">
    <p class="text">Login</p>
    <form @submit.prevent="userSubmit">
      <div class="form-group d-flex justify-content-center ">
        <div class="col-md-6  w-50">
          <input id="email" type="email" class="form-control" placeholder="Email"
                 v-model="user.email"
                 :class="{ 'is-invalid': submitted && $v.user.email.$error }">
          <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
            <span v-if="!$v.user.email.required">Email is required</span>
            <span v-if="!$v.user.email.email">Email is invalid</span>
          </div>
        </div>

        <div class="col-md-6 w-50">
          <input id="password" type="password" class="form-control" placeholder="Password"
                 v-model="user.password"
                 :class="{ 'is-invalid': submitted && $v.user.password.$error }">
          <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
            <span v-if="!$v.user.password.required">Password is required</span>
            <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
            <span v-if="!$v.user.password.maxLength">Password must not have a greater then 12</span>
          </div>
        </div>
      </div>

      <div class="form-check margin">
        <input type="checkbox" class="form-check-input" id="Check">
        <label class="form-check-label" for="Check">Remember Me</label>
      </div>

      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-info m-2 btn-lg " @click="checkUser">Sign</button>
      </div>
      <div class="d-flex account-register">
        <div class="color">No account?</div>
        <router-link to="/signup">
          <div class="color">Registration</div>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import {required,email,minLength,maxLength} from 'vuelidate/lib/validators'
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email:'',
        password:''
      },
      submitted:false
    }
  },
  validations: {
    user: {
      email: {required,email},
      password: {required,minLength:minLength(6),maxLength:maxLength(12)}
    }
  },
  methods: {
    checkUser() {
      axios.post('http://127.0.0.1:8000/api/auth/login',this.user).then(res=>{
        this.storageUsers(this.user)
        console.log(res)
        localStorage.setItem('access_token',res.data.access_token);
        this.storeUser()
        this.$router.push('/user')
      }).catch(err=>{
        console.log(err.response.data.error)
      })
    },
    storageUsers(user) {
      let allUsers = JSON.stringify(user);
      localStorage.setItem('current_user', allUsers);
    },

    userSubmit() {
      this.submitted = true,
        this.$v.$touch()
    },

  }
}
</script>

<style scoped>
.login-container {
  width: 500px;
  height: 400px;
  background-color: #fffdf1;
  margin: 40px auto;

}

.text {
  text-align: center;
  font-size: 1.3em;
  font-family: Corbel;
}

.margin {
  margin-left: 190px;
}

.account-register {
  margin-top: 50px;
  background-color: #fff764;
  text-align: center;
}

.color {
  color: #ff724b;
  margin-left: 100px;
}
</style>
