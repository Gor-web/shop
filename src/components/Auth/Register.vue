<template>
  <div class="register-container">
    <p class="text">Registration</p>
    <hr>
    <form @submit.prevent="handleSubmit">
      <div class="col-sm-6 offset-sm-3">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="firstname"
                 v-model="user.firstname"
                 :class="{ 'is-invalid': submitted && $v.user.firstname.$error }">
          <div v-if="submitted && !$v.user.firstname.required" class="invalid-feedback">First Name is required</div>
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="lastname"
                 v-model="user.lastname"
                 :class="{ 'is-invalid': submitted && $v.user.lastname.$error }">
          <div v-if="submitted && !$v.user.lastname.required" class="invalid-feedback">Last Name is required</div>
        </div>

        <div class="form-group">
          <input type="number" class="form-control" placeholder="Age"
                 v-model="user.age"
                 :class="{ 'is-invalid': submitted && $v.user.age.$error }">
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="Email"
                 v-model="user.email"
                 :class="{ 'is-invalid': submitted && $v.user.email.$error }">
          <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
            <span v-if="!$v.user.email.required">Email is required</span>
            <span v-if="!$v.user.email.email">Email is invalid</span>
          </div>
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="Password"
                 v-model="user.password"
                 :class="{ 'is-invalid': submitted && $v.user.password.$error }">
          <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
            <span v-if="!$v.user.password.required">Password is required</span>
            <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
            <span v-if="!$v.user.password.maxLength">Password must not have a greater then 12</span>
          </div>
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="ConfirmPassword"
                 v-model="user.confirmPassword"
                 :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }">
          <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
            <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
            <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
          </div>
        </div>

        <div class="form-group">
          <input type="submit" class="btn btn-outline-dark" value="Registration" @click="signup">
        </div>
      </div>
    </form>
  </div>

</template>

<script>
import {required, numeric, email, minLength, maxLength, sameAs} from 'vuelidate/lib/validators'
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        age: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      submitted: false
    }
  },
  validations: {
    user: {
      firstname: {required},
      lastname: {required},
      age: {required, numeric},
      email: {required, email},
      password: {required, minLength: minLength(6), maxLength: maxLength(12)},
      confirmPassword: {required, sameAsPassword: sameAs('password')},
    }
  },
  methods: {

    signup() {
      axios.post('http://127.0.0.1:8000/api/auth/signUp',this.user).then(res=>{
        this.$router.push("/login")
      }).catch(err=>{
        alert(err.response.data)
      })
    },

    handleSubmit(e) {
      this.submitted = true;
      this.$v.$touch();

    }
  }
}
</script>

<style scoped>
.text {
  text-align: center;
  font-size: 1.4em;
  font-family: "Arial Narrow";
}
</style>
