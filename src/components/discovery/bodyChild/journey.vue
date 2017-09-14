<template>
  <div class="journey"
        >
         <el-slideImg v-bind:imgObj="slideImgObj"></el-slideImg>
         <el-dynamic v-bind:click="click"></el-dynamic>
         <el-dynamic v-bind:click="click"></el-dynamic>
         <el-dynamic v-bind:click="click"></el-dynamic>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import elDynamic from '../../common/dynamic'
import elSlideImg from '../../common/slideImg'
export default {
  name: 'el-journey',
  components : {
    'el-dynamic' : elDynamic,
    'el-slideImg' : elSlideImg
  },
  data () {
    return {
      click : true,
      slideImgObj : [{
        url : 'http://www.baidu.com',
        imgUrl : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505411424620&di=d786a93c7193907a6b87729017abe2f5&imgtype=0&src=http%3A%2F%2Fi7.17173.itc.cn%2F2010%2Fnews%2F2010%2F06%2F23%2Fs0623gcd04s.jpg',
      },{
        url : 'http://www.baidu.com',
        imgUrl : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505411424620&di=d786a93c7193907a6b87729017abe2f5&imgtype=0&src=http%3A%2F%2Fi7.17173.itc.cn%2F2010%2Fnews%2F2010%2F06%2F23%2Fs0623gcd04s.jpg',
      },{
        url : 'http://www.baidu.com',
        imgUrl : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505411424620&di=d786a93c7193907a6b87729017abe2f5&imgtype=0&src=http%3A%2F%2Fi7.17173.itc.cn%2F2010%2Fnews%2F2010%2F06%2F23%2Fs0623gcd04s.jpg',
      }]
    }
  },
  computed : {
    ...mapState(['discovery']),
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
@split:1rem;
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


.dynamic{
  margin-top: @split;
}
p{
  display: inline;
}
</style>
