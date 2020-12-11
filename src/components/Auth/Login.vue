<template>
  <div class="login-container">
    <hr>
    <div class="d-flex justify-content-center align-items-center">
      <div class="form-group w-25 ">
        <p class="text">Login</p>
        <div class="d-flex justify-content-center">
          <input type="text" class="form-control m-2 width" placeholder="email">
        </div>

        <div class="d-flex justify-content-center">
          <input type="text" class="form-control m-2 width" placeholder="password">
        </div>

        <div class="form-check ml-3">
          <input type="checkbox" class="form-check-input" id="Check">
          <label class="form-check-label" for="Check">Remember Me</label>
        </div>
        <div class="d-flex justify-content-center">
          <input type="submit" class="btn btn-info m-2 " value="Sign">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
.text {
  text-align: center;
  font-size: 1.3em;
  font-family: Corbel;
}

</style>
