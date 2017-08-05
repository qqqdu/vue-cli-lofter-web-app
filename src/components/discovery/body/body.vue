<template>
  <div class="body"
       v-on:scroll='scroll'
       >
      <el-recommend v-bind:message="message" v-on:rollMything='rollMythings'></el-recommend>
  </div>
</template>

<script>
import elRecommend from '../bodyChild/recommend'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-body',
  components : {
    "el-recommend" : elRecommend
  },
  data () {
    return {
      message : null,
      sonBack : null
     }
  },
  computed : {
    ...mapState(['discovery'])
  },
  methods : {
    ...mapMutations(['GOTODISCOVER','GETBODYHEIGHT']),
    scroll : function(ev){
      setTimeout(function(){
        this.message= ev;  //滚动参数传递给子组件
        console.log(ev);
        this.sonBack&&this.sonBack({deltaY:1});
      },1000)
      
    },
    rollMythings : function(callback){
      console.log(113)
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
