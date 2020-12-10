<template>
    <div class="register-container d-flex align-items-center justify-content-center">
      <div class="form-group w-50">
        <h3 >Signup</h3>
        <input class="form-control m-2" type="text"placeholder="name">
        <input class="form-control m-2" type="text"placeholder="surname">
        <input class="form-control m-2" type="text"placeholder="age">
        <input class="form-control m-2" type="text"placeholder="email">
        <input class="form-control m-2" type="text"placeholder="password">
        <input class="form-control m-2" type="text"placeholder="confirm password">
        <button class="btn btn-dark">Register</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>
.register-container >input {
 margin-bottom: 40px;
}
</style>
