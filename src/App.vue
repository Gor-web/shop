<template>
  <div id="app">
<router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import BootstrapVue from 'bootstrap-vue';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  Vue.use(BootstrapVue);
export default {
  name: 'App',
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
font-family: "Droid Sans";
}
</style>
