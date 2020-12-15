<template>
  <div class="register-container ">
    <p class="text">Registration</p>
    <hr>
    <form @submit.prevent="submit">
      <div class="col-sm-6 offset-sm-3">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Name"
                 v-model.trim="$v.name.$model"
                 :class="{'is-invalid': validationStatus($v.name)}">
          <div v-if="!$v.name.required" class="invalid-feedback">The name is required</div>
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="Surname"
                 v-model.trim="$v.surname.$model"
                 :class="{'is-invalid': validationStatus($v.surname)}">
          <div v-if="!$v.surname.required" class="invalid-feedback">The surname is required</div>
        </div>

        <div class="form-group">
          <input type="number" class="form-control" placeholder="Age"
                 v-model.trim="$v.age.$model"
                 :class="{'is-invalid': validationStatus($v.age)}">
          <div v-if="!$v.age.required" class="invalid-feedback">The age is required</div>
          <div v-if="!$v.age.maxLength" class="invalid-feedback">Age can not be more than 100 {{$v.age.$params.maxLength.min}}</div>
        </div>

        <div class="form-group">
          <input type="text" class="form-control"
                 placeholder="Email" :class="{'is-invalid':validationStatus($v.email)}"
                 v-model.trim="$v.email.$model">
          <div v-if="!$v.email.required" class="invalid-feedback">The email is required</div>
          <div v-if="!$v.email.email" class="invalid-feedback">The email is not valid</div>
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="Password"
                 :class="{'is-invalid':validationStatus($v.password)}"
                 v-model.trim="password">
          <div v-if="!$v.password.required" class="invalid-feedback">Password is required</div>
          <div v-if="!$v.password.minLength" class="invalid-feedback">You mus have at least {{$v.password.$params.minLength.min}}</div>
          <div v-if="!$v.password.maxLength" class="invalid-feedback">You mus not have a greater then {{$v.password.$params.maxLength.max}}</div>
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="ConfirmPassword"
          :class="{'is-invalid': validationStatus($v.confirmPassword)}"
          v-model.trim="confirmPassword">
          <div v-if="!$v.confirmPassword.required" class="invalid-feedback">Confirm Password is required</div>
          <div v-else-if="!$v.confirmPassword.sameAsPassword" class="invalid-feedback">Passwords must match</div>
        </div>

        <div class="form-group">
          <input type="submit" class="btn btn-outline-dark" value="Registration">
        </div>
      </div>
    </form>
  </div>

</template>

<script>
import {required, maxLength, minLength, email, sameAs} from 'vuelidate/lib/validators'

export default {
  name: "Register",
  data() {
    return {
      name: '',
      surname: '',
      age: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  validations: {
    name: {
      required
    },
    surname: {
      required
    },
    age: {
      maxLength:maxLength(2),
      required
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(12)
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs('password')
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
      return typeof validation != "undefined" ? validation.$error : false
    }
  }
}
</script>

<style scoped>
.text {
  text-align: center;
  font-size: 1.3em;
  font-family: -apple-system;
}

.width {
  width: 450px;
  border-radius: 10px;
}

</style>
