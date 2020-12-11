<template>
  <div id="app">
    <Header/>
<router-view/>
  </div>
</template>

<script>

  import Header from "./components/Global/header";

export default {
  name: 'App',
  components: {Header},
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
</style>
