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
        <a href="javascript:;" 
           v-for='(item, key, index) in discovery.barType' 
           v-finger:touch-end='gotoPage'
           >
           {{item}}
        </a>
        <span class="after"></span>
        <span class="before"></span>
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
  mounted (){
    let el = document.querySelectorAll('.discovery .header .list .scroll a')[this.discovery.nowPage]; //初始化加粗
    addClass(el,'blodA')
  },
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
      shade : {
        el : null,
        el2 : null,
        width : 0,
        width2 : 0 
      },
      scroll_x : 0,
      lockRoll : true,  //单击锁
      lockEnd : true,
      directly : 0,
      time : null,
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
      let aLi = document.querySelectorAll('.discovery .header .list .scroll a');
      let index = [].indexOf.call(aLi,ev.currentTarget);
      if(!this.lockRoll)
        return;
      if(this.discovery.nowPage===index) //如果下标未改变
        return;
      this.GOTODISCOVER(index);          
      this.lockEnd = false
      return;
    },
    swipe (ev){

    },
    touchStart : function(ev){
      this.lockEnd = true
      if(!this.scroll.el){
        this.scroll.el = document.querySelectorAll('.discovery .scroll')[0];
        this.scroll.width = this.scroll.el.clientWidth;
      }
      if(!this.list.el){
        this.list.el = document.querySelectorAll('.discovery .list')[0];
        this.list.width = this.list.el.clientWidth;
      }
      if(!this.shade.el){
        this.shade.el = document.querySelectorAll('.discovery .scroll .after')[0];
        this.shade.width = 0;
      }
      if(!this.shade.el2){
        this.shade.el2 = document.querySelectorAll('.discovery .scroll .before')[0];
        this.shade.width2 = 0;
      }
      removeClass(this.scroll.el,'transition');
      removeClass(this.shade.el,'transition');
      removeClass(this.shade.el2,'transition');
    },
    touchMove: function(ev) {
      this.directly = ev.deltaX; //记录距离方向
      if(this.lockRoll) 
        this.lockRoll = false;
      this.scroll_x+=this.directly;
      if(this.checkHit()){
        if(this.directly>0){
            this.shade.width += this.directly;  //到头之后阴影部分椭圆
            if(this.shade.width>=15){
              this.shade.width = 15;
            }
            this.shade.el.style.width = this.shade.width+'px';
          }
        else{
            this.shade.width2 += -this.directly;  //到头之后阴影部分椭圆
            if(this.shade.width2>=15){
              this.shade.width2 = 15;
            }
            this.shade.el2.style.width = this.shade.width2+'px';
        } // if end...
        return;
      }
      this.scroll.el.style.transform = `translate3d(${this.scroll_x}px,0,0)`;
    },
    touchEnd : function(ev){
      var dis,
          symbol;
      if(!this.lockEnd)  //如果刚是子节点点击完成
        return
      this.lockRoll = true;
      addClass(this.scroll.el,'transition');
      //初始化阴影
      addClass(this.shade.el,'transition');
      addClass(this.shade.el2,'transition');
      this.shade.el.style.width = 0;
      this.shade.width = 0;
      this.shade.el2.style.width = 0;
      this.shade.width2 = 0;
      symbol = (this.directly>0)?1:-1;
    //  console.log(this.directly)
      
      if(Math.abs(this.directly)>40){
        if(this.directly>0){  
            this.scroll.el.style.transform = `translate3d(0px,0,0)`;
            this.scroll_x = 0;
         }else{
            this.scroll.el.style.transform = 
                        `translate3d(${-(this.scroll.width-this.list.width)}px,0,0)`;
            this.scroll_x = -(this.scroll.width-this.list.width);
         }
        return;
      }
      
      if(Math.abs(this.directly)>20){
        this.scroll_x += symbol*(this.scroll.width-this.list.width)*0.3;
        if(this.checkHit())
          return;
        this.scroll.el.style.transform = `translate3d(${this.scroll_x}px,0,0)`;
        return;
      }
      if(Math.abs(this.directly)>10){
        linerFun(0.1,this);
        return;
      }
      if(Math.abs(this.directly)>5){
          linerFun(0.05,this);
          return;
      } 
      function linerFun(timers,that){
          that.scroll_x += symbol*(that.scroll.width-that.list.width)*timers;
          console.log(timers,that.scroll_x);
          if(that.checkHit())
            return;
          that.scroll.el.style.transform = `translate3d(${that.scroll_x}px,0,0)`;
          return;
      }
    },
    getStyle : function(obj,look){
      return window.getComputedStyle(obj, null).style[look];
    },
    checkHit : function(){
      if(this.scroll_x>0){
        this.scroll.el.style.transform = `translate3d(0px,0,0)`;
        this.scroll_x = 0;
        return true;
      }
      if(Math.abs(this.scroll_x)>(this.scroll.width-this.list.width)+30){
        this.scroll.el.style.transform = 
                  `translate3d(${-(this.scroll.width-this.list.width+30)}px,0,0)`;
        this.scroll_x = -(this.scroll.width-this.list.width+30);
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
  left: .5rem;
  position: relative;
}
.scroll{

  width: auto;
  height: @height;
  display: inline-block;
  position: relative;
  white-space:nowrap;
  overflow-x: hidden;
  
}

 .child{
   display: block;
   width: 0;
   height: 3rem;
   background: rgb(179, 179, 179);
   position: absolute;
   top: 50%;
   margin-top: -1.5rem;
   border-radius: 50%;
}

.scroll .after{
   .child;
   left: -.5rem;
   border-bottom-right-radius: 50%;
   border-top-right-radius: 50%;
   
}
.scroll .before{
  .child;
  right:-.5rem;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
}
.scroll:before{

}
.list a {
  display: inline-block;
  position: relative;
  width: 4rem;
  height: 100%;
  font-size: 1rem;
  box-sizing: border-box;
}
.search{
  width: 2rem;
  height: @height;
  float: left;
  line-height: @lnHeight;
  position: relative;
} 
.dropDown{
  width: 3.5rem;
  float: left;
  height: 2.9rem;
  position: absolute;
  right: 0px;
  top: 0;
  background: -webkit-linear-gradient(left,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 40%);
  line-height: @lnHeight;
}
.icon(){
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  margin-top: -0.75rem;
  margin-left: -0rem;
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
