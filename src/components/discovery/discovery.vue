<template>
  <div class="discovery">
      <el-header></el-header>
      <el-body></el-body>
      <el-footer></el-footer>
  </div>
</template>

<script>
import elHeader from './header/header'
import elfooter from '../footer/footer'
import elBody from './body/body'
export default {
  name : 'discovery',
  components : {
    "el-footer" : elfooter,
    "el-header" : elHeader,
    "el-body" : elBody
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.discovery{
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding:3rem 0 3rem;
}
ul {
  list-style-type: none;
  padding: 0;
  width:90%;
  margin:0 auto;
  text-align: left;
}

li {
  display: inline-block;
  margin: 0 10px;
  border-bottom: 1px solid #ccc;
  width: 100%;
  padding:2px;
  line-height: 20px;
}
h2{
  font-size: 20px;
  line-height: 20px;
}
h2 span{
  float: right;
  font-size: 12px;
}
a {
  color:black;
  text-decoration: none;
} 

time{
  float: right;
}
</style>
