<template>
  <div class="header">
      <img :src="myImg">
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
      myImg: require('../../../assets/user/myImg.jpg'),
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
    ...mapMutations(['GOTOHOME'])
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
.header{
  width: 100%;
  height: @height*3-1;
  overflow: hidden;
  display: flex;
  align-items:center;
  flex-warp:center;
}
.header img{
  width: 100%;
}
.psCenter{
   position: absolute;
   top: 50%;
   left: 50%;
}


</style>
