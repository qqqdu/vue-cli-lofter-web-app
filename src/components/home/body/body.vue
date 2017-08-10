<template>
  <div class="body">
      <transition name='slide-subscribe'>
        <el-subscribe v-show='this.home.nowPage===0'></el-subscribe>
      </transition>
      <transition name='slide-follow' >
        <el-follow v-show='this.home.nowPage===1'></el-follow>
      </transition>
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
    ...mapState(['home'])
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
.commonActive{
  transition: all .3s ease;
}

.slide-subscribe-enter-active {
  .commonActive;
}
.slide-subscribe-leave-active {
  .commonActive;
}
.slide-subscribe-enter, .slide-subscribe-leave-to{
  transform: translateX(-20rem);
}
.slide-follow-enter-active {
  .commonActive;
}
.slide-follow-leave-active {
  .commonActive;
}
.slide-follow-enter, .slide-follow-leave-to{

  transform: translateX(20rem);
}
p{
  display: inline;
}
</style>
