<template>
  <div class="header">
    <div class="return" v-on:touchend='returnPage'>
      <span class="returnPage" ></span>
    </div>
      个人应用
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-homeHead',
  mounted(){

  },
  data () {
    return {
      __root:'../../assets',
      chooseIndex : 0,
      barType : [
          '推荐',
          '旅行',
          '摄影',
          '摄影课',
          '音乐',
          '设计',
          '女神',
          '运动',
          '电影',
          '娱乐',
          '穿搭'     
      ]
    }
  },
  computed : {
    ...mapState(['home'])
  },
  methods : {
    ...mapMutations(['GOTOHOME']),
     returnPage (ev){
        this.$router.go(-1);
      },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@imgSrc:'./assets';
@centerColor : #a2a6a6;
@height : 3rem;
@width: 20rem;
@lnHeight : 48px;
.blodA{
  font-weight: bold;
  border-bottom: 1px solid black;
}
.transition{
  transition:1.5s;
}

.psCenter{
   position: absolute;
   top: 50%;
   left: 50%;
}

.header{
  line-height: @height;
  text-align: center;
}
.addFri{
  width: 4rem;
  float: left;
  height: 2.9rem;
  position: absolute;
  right: 0px;
  top: 0;
  line-height: @lnHeight;
}

.icon(){
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  margin-top: -0.75rem;
  margin-left: -0.75rem;
}
.search img{
  .icon;
  .psCenter;
  
}
.addFri img{
  .icon;
  .psCenter;

}

</style>
