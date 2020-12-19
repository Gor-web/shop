<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Global/header";
import Footer from "./components/Global/footer";
export default {
  name: 'App',
  components: {Footer, Header},

}
</script>

<style>
#app {

}
</style>
