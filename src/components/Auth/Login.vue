<template>
  <div class="login-container">
    <p class="text">Login</p>
    <form v-on:submit.prevent="submit">
      <div class="form-group d-flex justify-content-center ">
        <div class="col-md-6  w-50">
          <input id="email" type="email" :class="{'is-invalid':validationStatus($v.email)}" class="form-control" placeholder="Email"
          v-model.trim="$v.email.$model">
          <div v-if="!$v.email.required" class="invalid-feedback">The email is required</div>
          <div v-if="!$v.email.email" class="invalid-feedback">The email is not valid</div>
        </div>

        <div class="col-md-6 w-50">
          <input id="password" type="password" :class="{'is-invalid':validationStatus($v.password)}" class="form-control" placeholder="Password"
          v-model.trim="password">
          <div v-if="!$v.password.required" class="invalid-feedback">Password is required</div>
          <div v-if="!$v.password.minLength" class="invalid-feedback">You mus have at least {{$v.password.$params.minLength.min}}</div>
          <div v-if="!$v.password.maxLength" class="invalid-feedback">You mus not have a greater then {{$v.password.$params.maxLength.max}}</div>
        </div>
      </div>

      <div class="form-check margin">
        <input type="checkbox" class="form-check-input" id="Check">
        <label class="form-check-label" for="Check">Remember Me</label>
      </div>

      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-info m-2 btn-lg ">Sign</button>
      </div>
      <div class="d-flex account-register">
        <div class="color">No account?</div>
        <router-link to="/signup"><div class="color">Registration</div></router-link>
      </div>

    </form>
  </div>
</template>

<script>
import {required, email, minLength, maxLength} from 'vuelidate/lib/validators'
export default {
  name: "Login",
  data() {
    return {
      email:"",
      password:"",
    }
  },
  validations: {
    email:{
      required,
      email
    },
    password:{
      required,
      minLength:minLength(6),
      maxLength:maxLength(12)
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$pending() || this.$v.$error()) {
          return
      }
    },
    validationStatus(validation) {
      return typeof validation != "undefined"? validation.$error :false
    }
  }
}
</script>

<style scoped>
.login-container {
  width: 500px;
  height: 400px;
  background-color: #fff5b1;
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
