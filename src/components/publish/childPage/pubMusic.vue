<template>
    <div class="pubMusic">
      <div class="header">
          <a href="javascript:;" class="close" v-returnPage>取消</a>
          <div class="center">
              <img :src="user.headImg" />
              <span>{{user.name}}</span>
          </div>
          <img :src="publish.icon.setBlod" class="setBlod">
      </div>
      <div class="section">
          <li>
              <div class="songInf">
                  <h3>啦啦啦</h3>
                  <p>啦啦啦</p>
                  <p>啦啦啦</p>
              </div>
              <div class="songIcon">
                  <img :src="user.headImg" />
              </div>
          </li>
          <li contenteditable="true" placeholder='dsfsdfsf'>
            
          </li>
          <li>音乐，pray，Sam Smitm，杭州</li>
          <li>音乐，pray，Sam Smitm，杭州</li>
      </div>
      <div class="footer">
          发布
      </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import axios from 'axios'
export default {
  name: 'elSearch',
  data () {
    return {
        songInf : '',
        iconSear  : require('../../../assets/search.png'),
        onoff : true,  // lock ajax
        searchEnd : {},
        songs : [],
        songCount : 0,   //all of lists
        nowLoadImgCount : 10, //begin load ten imgs
        nowCountList : 10, //begin load ten lists
        limit : 10,
        offset : 0 //页数
     }
  },
  mounted (){
    
  },
  components : {

  },
  computed : {
    ...mapState(['user','publish'])
  },
  watch : {
    songInf (){
      this.offset = 0;
      this.search();
      this.songs.length = 0;
    }
  }, 
  methods : {
    ...mapMutations(['gotoPageDynamicCon']),
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@headHeight:3rem;
@color:rgb(51, 51, 51);
@back:rgb(238, 238, 238);
@clear:rgb(204, 204, 204);
@green:#9ac600;
@lessColor:#999999;
@searchHead:2rem;
@split:1.2rem;
@liPx:5rem;
@iconPx:4rem;
.icon{
  width: @iconPx;
  height: @iconPx;
}
.flexCenter{
  display: flex;
  align-items:center;
}
.pubMusic{
  width: 100%;
  height: 100%;
  background:white;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  padding:@headHeight 0 @headHeight;
 
  overflow-y: auto;
}
.header{
  height:@headHeight;
  width: 100%;
  display: flex;
  align-items:center;
  justify-content:space-between;
  box-sizing: border-box;
  padding:0 @split 0;
}
.footer{
  height:@headHeight;
  width: 100%;
  background: @green;
  bottom: 0;
  line-height: @headHeight;
  text-align: center;
  color: white;
}
.header .center{
  .flexCenter;
  font-weight: bold;
  line-height: @headHeight/2;
}
.header .setBlod{
  width: @headHeight /2;
  height: @headHeight /2;
}
.header .center img{
  width: @headHeight/2;
  height: @headHeight/2;
  border-radius: 50%;
}
.section{
  width: 100%;
  height: auto;
}
.section li{
  height: @liPx;
  width: 100%;
  display: flex;
  align-items:center;
  justify-content:space-between;
  border-bottom:1px solid @back;
  padding:@split/2 @split @split/2;
  box-sizing: border-box;
  font-size: .6rem;
  color: @lessColor;
}
.section li:nth-child(2){
  height: @liPx*1.5;
  text-align: left;
  display: block;
  color: @color;
  outline: none;
}
.section li:nth-child(3){
  height: @liPx/2;
}
.section li:nth-child(4){
  height: @liPx/2;
 
}
.songIcon{
  .icon;
  position: relative;

}
.songIcon img{
  width: 100%;
  height: 100%;
  border-radius: 5%;
  border:1px solid @lessColor;
}
.bad{
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform:translate(-50%,-50%);
}
.songIcon:before{
  .bad;
  background: black;
  width: @iconPx/1.5;
  height: @iconPx/1.5;
  border-radius: 50%;
  opacity: .2;
}
.songIcon:after{
  .bad;
  border-top: @iconPx/6 solid transparent;
  border-right: @iconPx/6 solid transparent;
  border-bottom: @iconPx/6 solid transparent;
  border-left: @iconPx/4 solid white;
  transform:translate(-25%,-50%);
}
.songInf{
  
  height: 4rem;
  line-height: .8rem;
  text-align: left;
  box-sizing: border-box;
  color: @lessColor;
  display: flex;
  align-items:center;
  flex-direction:column;
}
.over{
   text-overflow:ellipsis;
   white-space:nowrap;   
   overflow:hidden;
   width: 10rem;
}
.songInf h3{
  font-size: 1rem;
  line-height: 1.4rem;
  height: 1.4rem;
  padding:0;
  color: @color;
  margin:0;
  .over;
}
.songInf p{
 
  line-height: 1.2rem;
  word-break:break-all;
  .over;
}


</style>
