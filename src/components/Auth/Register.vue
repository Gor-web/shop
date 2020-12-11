<template>
  <div class="register-container ">
    <p class="text">Registration</p>
    <hr>
    <div class="d-flex justify-content-center align-items-center ">
      <div class="form-group w-50 ">
        <div class="d-flex justify-content-center">
          <input type="text" class="form-control m-2 width" placeholder="name">
        </div>

        <div class="d-flex justify-content-center">
          <input type="text" class="form-control m-2 width " placeholder="surname">
        </div>

        <div class="d-flex justify-content-center">
          <input type="number" class="form-control m-2 width" placeholder="age">
        </div>

        <div class="d-flex justify-content-center">
          <input type="text" class="form-control m-2 width" placeholder="email">
        </div>

        <div class="d-flex justify-content-center">
          <input type="text" class="form-control m-2 width" placeholder="password">
        </div>

        <div class="d-flex justify-content-center">
          <input type="text" class="form-control m-2 width" placeholder="confirm password">
        </div>

        <div class="d-flex justify-content-center">
          <input type="submit" class="btn btn-secondary m-2 " value="Register">
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Register"
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
