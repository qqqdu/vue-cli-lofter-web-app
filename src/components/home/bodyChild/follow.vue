<template>
  <div class="follow">
      <div class="myFollow">
          <div class="followHead">我的订阅</div>
          <div v-for='item of myFollow' class="list">
            <div class="headImg">
              <img :src="item.img">
            </div>
            <div class="listRight">
              <p>{{item.name}}</p>
              <span class="num">{{item.num}}</span>
            </div>
          </div>
      </div>

      <div class="recommendFollow">
          <div class="followHead">推荐订阅</div>
          <div v-for='item of recommend' class="list">
            <div class="headImg">
              <img :src="item.img">
            </div>
            <div class="listRight">
              <p>{{item.name}}<span class="recoNum">{{item.recoNum}}人订阅</span></p>
              <span class="followBtn" v-show='!item.had' v-on:click='item.had = !item.had'>订阅</span>
            </div>
          </div>
      </div>
      <div class="myFollow">
          <a href="javascript:;" class="allTag">分类查看所有标签</a>
      </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-follow',
  components : {

  },
  data () {
    return {
      myFollow : [{
        img : require('../../../assets/user/logo.png'),
        name : '旅行',
        num : 2323
      },{
        img : require('../../../assets/user/logo.png'),
        name : '旅行',
        num : 2323
      },{
        img : require('../../../assets/user/logo.png'),
        name : '旅行',
        num : 2323
      }],
      recommend : [{
        img : require('../../../assets/user/logo.png'),
        name : "风景",
        had : false,
        recoNum : 444
      },{
        img : require('../../../assets/user/logo.png'),
        name : "风景",
        had : false,
        recoNum : 444
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
.alignL{
  text-align: left;
}
.alignR{
  text-align: right;
}
.padding5{
  padding:0 @paddingTb 0;
}
.blodA{
  font-weight: bold;
  border-bottom: 1px solid #dcdcdc;
}
.follow{
  color: @lessColor;
  font-size:@mainFont;
  box-sizing: border-box;
}
.myFollow{
    background:white;
    margin-top: @split;
}
.recommendFollow{
  background:white;
    margin-top: @split; 
}
.follow .followHead{
  .blodA;
  .alignL;
  height: @list2;
  line-height: @list2;
  .padding5;
}
.list{
  height: @list0;
  line-height: @list0;
  .padding5;
}
.list:nth-last-child(1) p{
  border:0;
}
.headImg{
  width: @list0;
  height: @list0;
  float: left;
  display: flex;
  flex-wrap:wrap;
  align-items:center;
}
.headImg img{
  width: @list1;
  height: @list1;
}
.listRight{
  width: 100%;
  height: @list0;
  box-sizing: border-box;
  padding-left: @list0;
  position: relative;
}
.listRight p{
  .alignL; 
  .blodA;
  height: @list0;
  font-size: @lMainFont;
  color: @mainColor;
  position: relative;
}
.listRight .recoNum{
  height: @list0/3;
  position: absolute;
  top: 50%;
  font-size: @smallFont;
  color: @lessColor;
  margin-top: -@list0/4;
  left: 0;
}

.commonBtn{
  display: inline-block;
  width: auto;
  height: 1rem;
  line-height: 1rem;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -.5rem;
  padding:@wordPadding;
}
.listRight span.followBtn{
  .commonBtn;

  color: @green;
  border:1px solid @green;
  border-radius: 6rem;
  text-align: center;
  font-size: @smallFont;
  width: 2.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
}
.listRight span.num{
  .commonBtn;
  color: white;
  border-radius: 6rem;
  text-align: center;
  font-size: @smallFont;
  background:#ccc;
}
.allTag{
  display: block;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
}

</style>
