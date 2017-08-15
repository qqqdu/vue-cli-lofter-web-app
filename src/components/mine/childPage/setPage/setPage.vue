<template>
  <div class="iframe">
        <el-header></el-header>
  </div>
</template>
<script>
import elHeader from './header'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-iframe',
  data () {
    return {
      iframe : true,
    
     }
  },
  components : {
    'el-header' : elHeader
  },
  computed : {
    ...mapState(['user'])
  },
  methods : {
    ...mapMutations([]),
    rollMythings : function(callback){
      this.sonBack = callback;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

.transition{
  transition:1.5s;
}
.flexCenter{
  display: flex;
  align-items:center;
  flex-warp:center;
}
.iframe{
  width: 100%;
  height: 100%;
  background:rgb(244, 245, 245);
  overflow-x:hidden;
  overflow-y:auto;
  position: fixed;
  text-align: left;
  box-sizing: border-box;
  top: 0;
}
.commonActive{
  transition: all .3s ease;
}
p{
  display: inline;
}

</style>
