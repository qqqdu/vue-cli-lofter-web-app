<template>
  <div class="header">
    <div class="list" >
        <a href="javascript:;" v-finger:touch-start="gotoPage">关注</a>
        <a href="javascript:;" v-finger:touch-start="gotoPage">订阅</a>
    </div>
    <div class="addFri">
        <img :src="imgArr['addFri']" class="icon">
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-homeHead',
  mounted(){
  //  console.log(this.hasClass)
    let aLi = document.querySelectorAll('.home .header .list  a');
    addClass(aLi[this.home.nowPage],'blodA')
    this.GOTOHOME(this.home.nowPage);
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
      ],
      imgArr : {
        search : require('../../../assets/search.png'),
        addFri : require('../../../assets/addFri.png')
      }
    }
  },
  computed : {
    ...mapState(['home'])
  },
  methods : {
    ...mapMutations(['GOTOHOME']),
     gotoPage (ev){
        let aLi = document.querySelectorAll('.home .header .list  a');
        let index = [].indexOf.call(aLi,ev.currentTarget);

        if(this.home.nowPage===index) //如果下标未改变
          return;
        removeClass(aLi[this.home.nowPage],'blodA')
        addClass(aLi[index],'blodA')
        this.GOTOHOME(index);
        return;
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

.list{
  width: @width;
  height: @height;
  line-height: @height;
  padding:0;
  display: block;
  text-align: center;
  word-wrap: normal;
  float: left;
  overflow: hidden;
  box-sizing: border-box;
  padding:0 4rem 0;
}

.list a {
  display: inline-block;
  position: relative;
  width: 50%;
  height: 100%;
  font-size: 1rem;
  box-sizing: border-box;
  float: left;
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
  width: 32px;
  height: 32px;
  display: inline-block;
  margin-top: -16px;
  margin-left: -10px;
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
