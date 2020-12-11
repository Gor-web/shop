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
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
#app {

}
html, body{

  margin:0 !important;
  padding:0 0 50px !important;
}
</style>
