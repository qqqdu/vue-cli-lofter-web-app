<template>
  <div class="header">
    <div class="search">
        <img :src="imgArr['search']" class="icon">
    </div>
    <div class="list" >
      <div class="scroll" 
           v-finger:touch-start="touchStart"
           v-finger:touch-move="touchMove"
           v-finger:touch-end="touchEnd"

           >
        <a href="javascript:;" v-for='(item, key, index) in barType' v-finger:touch-end='gotoPage'>{{item}}</a>
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
      scroll : {
        el : null,
        width : null
      },
      list : {
        el : null,
        width : null
      },
      scroll_x : 0,
      lockRoll : true,
      directly : 0,
      time : null,
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

      if(!this.lockRoll)
        return;
      if(this.discovery.nowPage===index) //如果下标未改变
        return;
      this.GOTODISCOVER(index);
      return;
    },
    swipe (ev){

    },
    touchStart : function(ev){
      this.time = new Date();
      if(!this.scroll.el){
        this.scroll.el = document.querySelectorAll('.scroll')[0];
        this.scroll.width = this.scroll.el.clientWidth;
      }
      if(!this.list.el){
        this.list.el = document.querySelectorAll('.list')[0];
        this.list.width = this.list.el.clientWidth;
      }

    },
    touchMove: function(ev) {
      this.directly = ev.deltaX; //记录方向
      if(this.lockRoll) 
        this.lockRoll = false;
      this.scroll_x+=ev.deltaX;
      if(this.checkHit())
        return;
      this.scroll.el.style.left = this.scroll_x+'px';
    },
    touchEnd : function(ev){
      this.lockRoll = true;
      this.time = this.time-new Date();
      console.log(this.time,this.scroll_x,this.directly)
      if(Math.abs(this.time)<=300){  //300 ms之内
          if(Math.abs(this.scroll_x)>=300)  // px >300
          {
             if(this.directly>0){
                this.scroll.el.style.left = '0px';  
                this.scroll_x = 0;
             }else{
                this.scroll.el.style.left = -(this.scroll.width-this.list.width)+'px';
                this.scroll_x = -(this.scroll.width-this.list.width);
             }
          }
          return;
      }
      
      if(Math.abs(this.time)<=500){  //500 ms之内
          if(Math.abs(this.scroll_x)>=100)  // px >300
          {
             var dis= (this.scroll.width-this.list.width)*0.3;
             if(this.directly>0){
                  
                this.scroll_x += dis;
             }else{
               
                this.scroll_x -= dis;
             }
             if(this.checkHit())
                  return
             console.log('hit');
             this.scroll.el.style.left =this.scroll_x+'px';
          }
          return;
      }
      


    },
    getStyle : function(obj,look){
      return window.getComputedStyle(obj, null).style[look];
    },
    checkHit : function(){
      if(this.scroll_x>0){
        this.scroll.el.style.left = '0px';  
        this.scroll_x = 0;
        return true;
      }
      if(Math.abs(this.scroll_x)>(this.scroll.width-this.list.width)){
        this.scroll.el.style.left = -(this.scroll.width-this.list.width)+'px';
        this.scroll_x = -(this.scroll.width-this.list.width);
        return true;
      }
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
  overflow: hidden;
}
.scroll{

  width: auto;
  height: @height;
  display: inline-block;
  position: relative;
  white-space:nowrap;
  overflow-x: hidden;
  transition:1s;
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
