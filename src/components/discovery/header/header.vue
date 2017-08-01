<template>
  <div class="header">
    <div class="search">
        <img :src="imgArr['search']" class="icon">
    </div>
    <div class="list" >
      <div class="scroll">
        <a href="javascript:;" v-for='(item, key, index) in barType' v-on:click='gotoPage'>{{item}}</a>
      </div>
    </div>
    <div class="dropDown">
        <img :src="imgArr['dropDown']" class="icon">
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-header',
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
        dropDown : require('../../../assets/dropDown.png')
      }
    }
  },
  computed : {
    ...mapState(['discovery'])
  },
  methods : {
    ...mapMutations(['GOTODISCOVER']),
    gotoPage (ev){
      let aLi = document.querySelectorAll('.header .list .scroll a');
      let index = [].indexOf.call(aLi,ev.currentTarget);
      if(this.discovery.nowPage===index) //如果下标未改变
        return;

      console.log(this.discovery.nowPage)
      this.GOTODISCOVER(index);
      return;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@imgSrc:'./assets';
@centerColor : #a2a6a6;
@height : 3rem;
@width: 16rem;
@lnHeight : 48px;
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
}
.scroll{

  width: auto;
  height: @height;
  display: inline-block;
  position: relative;
  white-space:nowrap;
  overflow-x: hidden;
}
.list a {
  display: inline-block;
  position: relative;
  width: 4rem;
  font-size: 1rem;
}
.search{
  width: 2rem;
  height: @height;
  float: left;
  line-height: @lnHeight;
  position: relative;
} 
.dropDown{
  width: 4rem;
  float: left;
  height: @height;
  position: absolute;
  right: 0px;
  top: 0;
  background: -webkit-linear-gradient(left,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 40%);
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
.dropDown img{
  .icon;
  .psCenter;

}
.gradient(@gradient:linear-gradient(left,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 40%)){
  background:-webkit-;
}


p{
  display: inline;
}
</style>
