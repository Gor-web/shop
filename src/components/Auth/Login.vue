<template>
  <div class="login-container">
    <p class="text">Login</p>
    <form>
      <div class="form-group d-flex justify-content-center ">
        <div class="col-md-6  w-50">
          <input id="email" type="email" class="form-control" placeholder="Email">
        </div>

        <div class="col-md-6 w-50">
          <input id="password" type="password" class="form-control" placeholder="Password">
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
export default {
  name: "Login"
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
