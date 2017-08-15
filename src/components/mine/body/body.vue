<template>
  <div class="body">
      <div class="myInf">
          <div class="imgHead">
                <img :src="user.headImg">
          </div>
          <div class="infRight">
              <p>{{user.name}}<span>ID：{{user.ID}}</span></p>
              <div>  
                  <a>关注 <span>{{user.follow}}</span></a>
                  <a>喜欢 <span>{{user.like}}</span></a>
                  <a>粉丝 <span>{{user.fans}}</span></a>
              </div>
          </div>
          <div class="h_arrowR"></div>
      </div>
      <div class="list">
          <li v-for='item in list' v-on:touchend='gotoPage'>
              <div class="imgHead">
                <img :src="item.img">
              </div>
              <div class="rightContain">
                    <p>{{item.word}}</p>
                    <span class="h_arrowR"></span>
              </div>
          </li>
      </div>
  </div>
</template>
<script>

import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-body',
  data () {
    return {
      iframe : true,
      list : [{
        word : '个人应用',
        img : require('../../../assets/appli.png'),
        href : '/mine/application'
      },{
        word : '摄影课堂',
        img : require('../../../assets/photo.png'),
        href : './mine/photography'
      },{
        word : '分享LOFFTER APP',
        img : require('../../../assets/share.png'),
        href : '#'
      },{
        word : '设置',
        img : require('../../../assets/set.png'),
        href : './mine/setPage'
      }]
     }
  },
  components : {
    
  },
  computed : {
    ...mapState(['user'])
  },
  methods : {
    ...mapMutations([]),
    rollMythings : function(callback){
      this.sonBack = callback;
    },
    gotoPage : function(ev){
         let elist = document.querySelectorAll(".mine .body .list li");
         let index = Array.prototype.indexOf.call(elist,ev.currentTarget);
         console.log(index)
         if(index===2){
          return true;
         }
         this.$router.push(this.list[index].href);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@centerColor : #a2a6a6;
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
@infA:#7d7d7d;
@lessColor:#999999;
@lesstColor:#d8d8d8;
@mainColor:rgb(51, 51, 51);
@green:rgb(154, 198, 0);
@bule:rgb(91, 159, 201);
@wordPadding:0 .5rem 0;
@paddingTb:.5rem;
@height3:3rem;
@split:1rem;
@headHeight:@height*3-1;
@height : 3rem;
@head: 8rem;
.transition{
  transition:1.5s;
}
.flexCenter{
  display: flex;
  align-items:center;
  justify-content:center;

}
.body{
  width: 100%;
  height: 100%;
  overflow-x:hidden;
  overflow-y:auto;
  position: relative;
  text-align: left;
  box-sizing: border-box;
  padding-top: @head;
  z-index: 999;
}
.commonActive{
  transition: all .3s ease;
}
p{
  display: inline;
}

 .myInf{
  width: @width;
  height: @headHeight;
  height: @head;
  background:rgba(255, 255, 255, 0.7);
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  padding:@paddingTb;
  .flexCenter;
  justify-content:flex-start;
}
 .imgHead{
  width: @list5;
  height: @list5;
  float: left;
  .flexCenter;
}
.imgHead img{
  width: 90%;
  height: 90%;
  border-radius: 50%;
}
li .imgHead img{
  width: 50%;
  height: 50%;
}
.myInf p{
  font-weight: bold;
  text-align: left;
  height: @list1;
}
.myInf p span{
  font-size: @smallFont;
  color: @lesstColor;
  display: block;
  line-height: @list2/1.3;
}
.myInf a{
  font-size: @mainFont;
  color: @infA;
  margin:0 @list2/3 0 0;
}
.myInf a span{
  font-weight: bold;
  color: @mainColor;
}
.psCenter{
   position: absolute;
   top: 50%;
   left: 50%;
}
li{
  .flexCenter;
  height: @list1;
  line-height: @list1;
}
li .imgHead{
  width: @list1;
  height: @list1;
}
li .imgHead img{

}
.rightContain{
  line-height: @list1/3;
  box-sizing: border-box;
  position: relative;
  height: 100%;
  border-bottom: 1px solid @lesstColor;
  width: 17rem;
}

li:nth-last-child(1) .line{
  border:none;
}
.rightContain p{
  box-sizing: border-box;
  line-height: @list1;
  text-align: left;
}
.rightContain .h_arrowR{
  float: left;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -.6rem;
}
.rightContain .words{
  font-size: @smallFont;
  color: @lessColor;
}
</style>
