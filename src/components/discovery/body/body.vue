<template>
  <div class="body">
      <el-components v-bind:contentArr='content'></el-components>
  </div>
</template>

<script>
import elRecommend from '../bodyChild/recommend'
import elComponents from './components'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-body',
  components : {
    "el-components" : elComponents,
    "el-recommend" : elRecommend
  },
  mounted (){
    let that = this;
    setTimeout(function(){
        document.getElementsByTagName('body')[0].onscroll = function(ev){
            that.scroll(ev);
        }
    },100)
    
  },
  data () {
    return {
      message : null,
      sonBack : null,
      scrollLast : 0,

      content : [elRecommend]
   
     }
  },
  computed : {
    ...mapState(['discovery'])
  },
  methods : {
    ...mapMutations([]),
    scroll : function(ev){
      let that = this;
      that.message = ev;  //滚动参数传递给子组件
      that.sonBack&&that.sonBack({deltaY:ev});
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

}



p{
  display: inline;
}
</style>
