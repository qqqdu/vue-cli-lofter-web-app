<template>
  <div class="body"
       v-on:scroll='scroll'
       v-on:touchend='touchend'
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
      sonBack : null,
      lockScroll : true,
      scrollLast : 0,
     }
  },
  computed : {
    ...mapState(['discovery'])
  },
  methods : {
    ...mapMutations(['GOTODISCOVER','GETBODYHEIGHT']),
    scroll : function(ev){
      let that = this;
      
      if(!this.lockScroll)
        return;
      this.lockScroll = false;
      //setTimeout(function(){
        that.message= ev;  //滚动参数传递给子组件
        that.sonBack&&that.sonBack({deltaY:ev});
        that.lockScroll = true;
      //},60)
      
    },
    touchend : function(){
      
    },
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
