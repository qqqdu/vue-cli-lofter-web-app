<template>
  <div class="dynamic">
      <div class="head">
          <div class="imgHead">
            <img :src="this.imgArr.headImg" class="img">
          </div>
          <p>用户名</p>
          <span class="time" v-show='false'>五分钟前</span>
          <span class="follow">关注</span>
      </div>
      <div class="bigImg">
          <img :src="this.imgArr.headImg">
      </div>
      <div class="word">
          <p>离开株洲那片净土，已经有一个月又一天零十小时了。毕业之后，开始工作，学会成长，面对形形色色的人。我把头发挽起来，自以为很淡定的，面带笑容的看着周围的一切。上班，下班，吃饭，喝水，这就是我的生活，我毕业之后全部的生活。</p>
      </div>
      <div class="location">
        
      </div>
      <div class="tag">
          <span>#</span>
      </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-dynamic',
  mounted(){
    
  },
  data () {
    return {
      __root:'../../assets',
      chooseIndex : 0,
      barType : [
         
      ],
      imgArr : {
        headImg : require('../../assets/user/head.png')
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
@height : auto;
@width: 20rem;
@list1 : 3rem;
@imgHead : 2.5rem;
@1Font:1rem;
@mainFont:.8rem;
@smallFont:.6rem;
@lessColor:#999999;
@mainColor:rgb(51, 51, 51);
@green:rgb(154, 198, 0);
@wordPadding:0 .5rem 0;
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

.dynamic{
  width: @width;
  height: @height;
  padding:0;
  display: block;
  text-align: left;
  word-wrap: normal;
  float: left;
  overflow: hidden;
  box-sizing: border-box;
  background:white;
  font-size: @mainFont;
  color: @mainColor;
  padding:@wordPadding;
}

.dynamic a {
  display: inline-block;
  position: relative;
  width: 33%;
  height: 100%;
  font-size: 1rem;
  box-sizing: border-box;
  float: left;
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
.head{
  height: @list1;
  position: relative;
  line-height: @list1;
  text-align: left;
}
.head .imgHead{
  width: @list1;
  height: @list1;
  float: left;
}
.imgHead .img{
  vertical-align:middle;
  width: 80%;
  height: 80%;
  border-radius: 50%;
}
.head span{
  float: right;
  font-size: @smallFont;
}
.time{
  color: @lessColor;
}
.follow{
  display: inline-block;
  width: 3.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  color: @green;
  border:1px solid @green;
  border-radius: 6rem;
  margin-top: -.75rem;
  position: absolute;
  top: 50%;
  right: 1rem;
  text-align: center;
}
.bigImg{
  max-height: 30rem;
  overflow: hidden;
  text-align: center;
}
.word{

  text-indent: 2em;
}
.tag{
  font-size: @1Font;
}
</style>
