<template>
  <div class="subscribe">
         <el-dynamic></el-dynamic>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import elDynamic from '../../common/dynamic'
export default {
  name: 'el-subscribe',
  components : {
    'el-dynamic' : elDynamic
  },
  props : ["message"], //父组件传递回来的消息,滚动条高度
  data () {
    return {
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@imgSrc:'./assets';
@centerColor : #a2a6a6;
@height : 13.5rem;
@width: 16rem;
@lnHeight : 48px;
@fontColor : rgb(153, 153, 153);
.transition{
  transition:1.5s;
}
ul{
  width: auto;
  height: auto;
}
li{
  width: 100%;
  height: @height;
  line-height: @height;
  display: block;
  text-align: center;
  vertical-align: middle;
  position: relative;
  background:white;
}
.imgMax{
  width: 100%;
  height: 13.5rem;
  overflow: hidden;
  position: relative;
  top: -4rem;
}
img{
  width: 100%;
  display: block;
  margin:0 auto;
  vertical-align: middle;

  transform:translate(-50%,-50%);
  position: absolute;
  left: 50%;
  top: 50%;
  
}
.moveTitle{
  position: absolute;
  width: 100%;
  height: 4rem;
  background:white;
  bottom: 0;
  color: black;
  text-align: center;
  line-height: 4rem;
  font-size: .8rem;
  z-index: 999;
}
.line{
  width: 91%;
  padding-bottom: 5px;
  border-bottom:1px solid #ccc;
  display: inline-block;
  line-height: 2rem;
  position: relative;
  top: -5px;
  text-align: left;
  color: @fontColor;
}

p{
  display: inline;
}
</style>
