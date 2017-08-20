<template>
  <div class="body">
      <transition 
        name='slide-subscribe'
        v-on:before-enter = "beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
          <el-dynamic v-show='this.news.nowPage===0'></el-dynamic>
      </transition>
      <transition 
        name='slide-subscribe'
        v-on:before-enter = "beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
          <el-newsCall v-show='this.news.nowPage===1'></el-newsCall>
      </transition>
      <transition 
        name='slide-follow'
        v-on:before-enter = "beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <keep-alive>
            
            <el-chatting v-show='this.news.nowPage===2'></el-chatting>
        </keep-alive>
      </transition>
  </div>
</template>
<script>
import elChatting from '../bodyChild/chatting'
import elDynamic from '../bodyChild/dynamic'
import elNewsCall from '../bodyChild/newsCall'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-body',
  components : {
    "el-chatting" : elChatting,
    'el-dynamic' : elDynamic,
    'el-newsCall' : elNewsCall,
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
    ...mapState(['news'])
  },
  methods : {
    ...mapMutations([]),
    rollMythings : function(callback){
      this.sonBack = callback;
    },
    beforeEnter: function (el) {
      //el.style.transform ='translateX(20rem)';
      addClass(el,'.commonActive')
    },
    enter (el, done){
      el.style.transform ='translateX(0)';
      done();
      removeClass(el,'.commonActive')
    },
    leave (el, done){
      el.style.transform ='translateX(-20rem)';
      done();
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
.commonActive{
  transition: all .3s ease;
}



p{
  display: inline;
}
</style>
