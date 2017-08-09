<template>
  <div class="home main">
      <el-header></el-header>
      <el-bodyer></el-bodyer>
      <el-footer></el-footer>
  </div>
</template>

<script>
import elHeader from './header/header'
import elBody from './body/body'
import elfooter from '../footer/footer'
import {mapState,mapMutations} from 'vuex';
export default {
  name : 'home',
  components : {
    "el-footer" : elfooter,
    "el-header" : elHeader,
    'el-bodyer' : elBody
  },
  data () {
    return {
      
    }
  },
  computed : {
     ...mapMutations(['GOTOPAGE'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
