<template>
  <div class="header">
    <div class="list" >
        <a href="javascript:;" v-on:touchend="gotoPage">动态</a>
        <a href="javascript:;" v-on:touchend="gotoPage">消息</a>
        <a href="javascript:;" v-on:touchend="gotoPage">聊天</a>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-newsHead',
  mounted(){
  //  console.log(this.hasClass)
    let aLi = document.querySelectorAll('.news .header .list  a');
    addClass(aLi[this.news.nowPage],'blodA')
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

      }
    }
  },
  computed : {
    ...mapState(['news'])
  },
  methods : {
    ...mapMutations(['GOTONEWS']),
     gotoPage (ev){
        let aLi = document.querySelectorAll('.news .header .list  a');
        let index = [].indexOf.call(aLi,ev.currentTarget);
        console.log(this.news.nowPage,index);
        if(this.news.nowPage===index) //如果下标未改变
          return;
        removeClass(aLi[this.news.nowPage],'blodA')
        addClass(aLi[index],'blodA')
        this.GOTONEWS(index);
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
  border-bottom: 1px solid rgb(220, 220, 220);
}

.list a {
  display: inline-block;
  position: relative;
  width: 33%;
  height: 100%;
  font-size: 1rem;
  box-sizing: border-box;
  float: left;
}
.list a:nth-child(2){
  width: 34%;
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
