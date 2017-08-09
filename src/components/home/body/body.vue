<template>
  <div class="body">
      <el-subscribe></el-subscribe>
  </div>
</template>

<script>
import elFollow from '../bodyChild/follow'
import elSubscribe from '../bodyChild/subscribe'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-body',
  components : {
    "el-follow" : elFollow,
    'el-subscribe' : elSubscribe
  },
  data () {
    return {
      message : null,
      sonBack : null,
      scrollLast : 0,
      throttleTime : null
     }
  },
  computed : {
    ...mapState(['discovery'])
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
@imgSrc:'./assets';
@centerColor : #a2a6a6;
@height : 12rem;
@width: 16rem;
@lnHeight : 48px;
.transition{
  transition:1.5s;
}
.body{
  width: 100%;
  height: 100%;
  overflow-x:hidden;
  overflow-y:auto;
}



p{
  display: inline;
}
</style>
