<template>
  <div id="app">
  <bar></bar>
    <router-view></router-view>
  </div>
</template>

<script>
import bar from './components/bar.vue';
export default {
  name: 'app',
  components: {
    bar:bar
  }
}
</script>

<style>
body,html{
  padding:0;
  border:0;
  margin:0;
  overflow-x:hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  color: #2c3e50;
}
</style>
