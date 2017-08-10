<template>
  <div class="dynamic">
      <div class="head">
          <div class="imgHead">
            <img :src="dynamic.headImg" class="img">
          </div>
          <p>{{dynamic.name}}</p>
          <span class="time" v-show='dynamic.follow'>{{changeTime()}}</span>
          <span class="follow" v-show='!dynamic.follow'>关注</span>
      </div>
      <div class="bigImg">
          <img :src="dynamic.img">
      </div>
      <div class="word">
          <p>{{dynamic.word}}</p>
      </div>
      <div class="location">
        
      </div>
      <div class="tag">
          <span>#</span>
          <a href="javascript:;" v-for='item of dynamic.tag'>{{item}}</a>
      </div>
      <div class="split"></div>
      <div class="operate">
          <img :src="btnImg.heart">
          <img :src="btnImg.comment">
          <img :src="btnImg.transmit">
          <img :src="btnImg.agree">
          <div class="more">
              <span></span>
              <span></span>
              <span></span>
          </div>
      </div>
      <div class="comment">
          <div class="headInf">
              <span>{{dynamic.comment.hot}} 热度</span>
              <span>{{dynamic.comment.num}} 评论</span>
          </div>
          <div class="commentBody">
              <p v-for="item of dynamic.comment.users"><a :href="item.url">{{item.name}}</a>:{{item.word}}</p>
          </div>
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
      dynamic : {
        name : '用户名',
        headImg : require('../../assets/user/head.png'),
        time : new Date(),
        img : require('../../assets/user/head.png'),
        follow :false,
        word : '离开株洲那片净土，已经有一个月又一天零十小时了。毕业之后，开始工作，学会成长，面对形形色色的人。我把头发挽起来，自以为很淡定的，面带笑容的看着周围的一切。上班，下班，吃饭，喝水，这就是我的生活，我毕业之后全部的生活。',
        location : '浙江 杭州',
        tag : ['旅行','旅游','摄影'],
        comment : {
          hot : 22,
          num : 2,
          users : [{
            name : "风花雪月",
            word : "美到窒息啊啊啊",
            url : "#"
          }]
        }
      },
      imgArr : {
        
      },
      btnImg : {
        heart : require('../../assets/heart.png'),
        comment : require('../../assets/comment.png'),
        transmit : require('../../assets/transmit.png'),
        agree : require('../../assets/agree.png')
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
      changeTime(){
        let date = this.dynamic.time;
        let now = new Date()-date;
        if(now<3600){
          return "刚刚"
        }
        if(now<3600*60){
          return Math.floor(now/60) +'分前'
        }
        if(now<3600*60*60){
          return Math.floor(now/3600) +'小时前'
        }

        return date.getFullYear()+'-'+(date.getMonth()+1) + date.getDate();   
      }
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
@lesstColor:#d8d8d8;
@mainColor:rgb(51, 51, 51);
@green:rgb(154, 198, 0);
@bule:rgb(91, 159, 201);
@wordPadding:0 .5rem 0;
@paddingTb:.5rem;
@height3:3rem;
@split:1rem;
.flex{
    display: flex;
  flex-wrap: wrap;
}
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
  margin-top: @split;
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
.commonBtn{
  display: inline-block;
  width: 3.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -.75rem;
}
.time{
  color: @lessColor;
  .commonBtn;
  width: auto;
}
.follow{
  .commonBtn;
  color: @green;
  border:1px solid @green;
  border-radius: 6rem;
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
  .flex;
  color: @lessColor;
  font-size: @smallFont;
  line-height: @mainFont*1.5;
  margin:@paddingTb 0 @paddingTb;
}
.tag span:nth-child(1){
  float: left;
  font-size: @mainFont;
}
.tag a{
  padding:0 .3rem 0;
  color: @lessColor;
}
.split{
  border:1px dashed @lesstColor;
}

.smallBtn{
  width: 2rem;
  height: 2rem;
}
.operate{
  .flex;
  height: @height3;
  position: relative;
  align-items: center;
  justify-content:flex-start;
}
.operate img{
  .smallBtn;
  margin:0 .8rem 0;
}
.operate img:nth-child(1){
  margin-left: 0;
}
.operate .more{
  .smallBtn;
  width: 1.6rem; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 0;
}
.operate .more span{
  width: .1rem;
  height: .1rem;
  border:.1rem solid @lessColor;
  border-radius: 50%;
}
.comment{

}
.comment .headInf{
  color: @lessColor;
}
.headInf span{
  margin-left: .5rem;
}
.headInf span:nth-child(1){
  margin-left: 0;
}
.commentBody{
  padding:@paddingTb 0 @paddingTb;
}
.comment .commentBody a{
  color: @bule;
}
</style>
