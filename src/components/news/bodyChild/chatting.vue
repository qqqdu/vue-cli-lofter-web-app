<template>
  <div class="chatting">
       <li v-for='item in user'>
            <div class="imgHead">
              <img :src="item.head">
            </div>
            <div class="rightContain">
                <div class="line">
                  <p>{{item.name}}<time>{{item.time}}</time></p>
                  <p class="words">{{item.words}}</p>
                </div>
            </div>
       </li>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-chatting',
  props : ["message"], //父组件传递回来的消息,滚动条高度
  data () {
    return {
      user: [{
        head: require('../../../assets/user/head.png'),
        name: 'lofter通知',
        time : '07-19',
        words : 'HI,欢迎来到这里.....'
      },{
        head: require('../../../assets/user/head.png'),
        name: 'lofter通知',
        time : '07-19',
        words : 'HI,欢迎来到这里.....'
      },{
        head: require('../../../assets/user/head.png'),
        name: 'lofter通知',
        time : '07-19',
        words : 'HI,欢迎来到这里.....'
      }]
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
@list5 : 5rem;
@list0 : 4rem;
@list1 : 3rem;
@list2 : 2rem;
@imgHead : 2.5rem;
@1Font:1rem;
@lMainFont:.9rem;
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
.transition{
  transition:1.5s;
}
ul{
  width: auto;
  height: auto;
}
li{
  width: 100%;
  height: @list0;
  display: block;
  text-align: center;
  vertical-align: middle;
  position: relative;
  background:white;
  padding: 0 @paddingTb 0;
  box-sizing: border-box;
  font-size: @mainFont;

}
 .imgHead{
  width: @list0;
  height: @list0;
  float: left;
  display: flex;
  align-items:center;
  flex-warp:center;
}
.imgHead img{
  width: 70%;
  height: 70%;
  border-radius: 50%;
}

.rightContain{
  line-height: @list1/3;
  box-sizing: border-box;
  padding-top: @list1/3;
  height: 100%;
  padding-left: @list1;
}
.line{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid @lesstColor;
}
li:nth-last-child(1) .line{
  border:none;
}
.rightContain p{
  box-sizing: border-box;
  
  text-align: left;
}
.rightContain time{
  float: right;
  color: @lessColor;
   font-size: @smallFont;
}
.rightContain .words{
  font-size: @smallFont;
  color: @lessColor;
}
</style>
