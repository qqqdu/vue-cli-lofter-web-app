<template>
  <div id="app">
    <router-view></router-view>
    <el-less></el-less>
  </div>
</template>

<script>
import less from './components/less'
export default {
  name: 'app',
  components: {
    'el-less' : less
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
  width: 100%;
  height: 100%;
  overflow: hidden;
}
a{
  color: #2c3e50;
}
</style>
