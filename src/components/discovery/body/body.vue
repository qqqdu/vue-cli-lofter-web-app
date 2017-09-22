<template>
  <div class="body">
      <el-components ></el-components>
  </div>
</template>

<script>
import elRecommend from '../bodyChild/recommend'
import elJourney from '../bodyChild/journey'

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
   // document.querySelector('.contents').style.width = ;

  },
  data () {
    return {
      message : null,
      sonBack : null,
      scrollLast : 0
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
<style   lang='less'>
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

.contents{
  position: relative;
  top: 0;
  left: 0;
  width: 40rem;
  height: 100%;
  box-sizing: border-box;
  transition:.3s;
  overflow:hidden;

}
.contents>div{
  float: left;
  position: relative;
  height: 100%;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  overflow-y: auto;
}
</style>
