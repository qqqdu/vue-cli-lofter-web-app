<template>
  <div id="app">
  <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view>
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

#app {
  font-family: '宋体', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: auto;
}
a{
  color: #2c3e50;
}
</style>
