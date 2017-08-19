<template>
  <div class="recommend" v-on:touchstart="touchStart">
    <ul>
      <li v-for='(item,key,index) in userImg'>
          <div class="imgMax">
              <img src="../../../assets/user/IMG_20160710_201616.jpg" class="icon">
          </div>
          <div class="moveTitle">
              <span class="line">作者：杜浩</span>
          </div>  
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-recommend',
  props : ["message"], //父组件传递回来的消息,滚动条高度
  data () {
    return {
      __root:'../../assets',
      initLock : true,
      chooseIndex : 0,
      list : {
        el : null,
        h : null   //height
      },
      moveTitle : {
        el : null,
        maxMove : 0,
        h : null,
        moveObj : []
      },
      body : {
        el : null,
        h : null
      },
      maxElNm : 0,  //最大可展示的图片节点
      scrollLast : 0,
      directly : 0,
      moveArr : [],
      num : 0,
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
      },
      userImg: [ 
                 'IMG_20160710_201616.jpg',
                 'IMG_20160713_173309.jpg',
                 'IMG_20160713_173323.jpg',
                 'IMG_20160716_115132.jpg',
                 'IMG_20170429_164226.jpg',
                 'IMG_20170429_164237.jpg',
                 'IMG_20170429_185549.jpg',
                 'IMG_20170429_185621.jpg',
                 'IMG_20170430_104811.jpg'
              ]
    }
  },
  computed : {
    ...mapState(['discovery']),
    moveTitleY: ()=>{

    }
  },
  methods : {
    ...mapMutations(['GOTODISCOVER','GETBODYHEIGHT']),
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
      if(!this.initLock)  //had init
        return false;
      this.initLock = false;
      //init
      this.list.el = document.querySelectorAll('.recommend ul li')[0] 
      this.list.h = this.list.el.offsetHeight
      this.moveTitle.el = document.querySelectorAll('.recommend .moveTitle')[0]
      this.moveTitle.h = this.moveTitle.el.offsetHeight
      this.body.el = document.querySelector('body')
      this.body.h = this.body.el.offsetHeight
      this.maxElNm = Math.floor(this.body.h/this.list.h)
      /*初始化加载现有节点动画*/
      for(let i =0;i<this.maxElNm;i++){
        addClass(document.querySelectorAll('.recommend .moveTitle')[i],'moveTitles');
      }
      /*触发父元素事件*/
      this.$emit("rollMything",this.rollMove)
    },
    rollMove: function(ev) {
      let nowLast = document.body.scrollTop;
      let listTop = this.list.h - this.moveTitle.h // 列表的上半部分高度
      let allBody = nowLast + this.body.h; //屏幕的宽度+滚动宽度
      let alreadyNum = Math.floor(allBody/this.list.h)
      let firstElIndex = alreadyNum-this.maxElNm;
      let add = nowLast-this.scrollLast
      if(add>0){
          if(allBody-alreadyNum*this.list.h>=(this.list.h-this.moveTitle.h))  //下滑时，开始移动 
          {
                let el = document.querySelectorAll('.recommend .moveTitle')[alreadyNum]
                addClass(el,'moveTitles');
          }
      }
      this.scrollLast = nowLast 
      this.moveTitles(add);
      for(let i =0;i<this.maxElNm;i++){
          this.moveArr[i] = alreadyNum-this.maxElNm+i;
      }
    },
    moveTitles : function(add){
        let els = document.querySelectorAll('.recommend .moveTitles');
        let that = this;
        Array.prototype.forEach.call(els,function(el,index){
          let stateY = el.style.transform;
          if(stateY){
           stateY = that.getTranslate(stateY)
          }
          stateY+=-add/10
          el.style.transform = 'translate3d(0px ,'+stateY+'px,0px)'
        })
    },
    touchEnd : function(ev){

    },
    getTranslate : function(stateY){
        stateY = stateY.split('(')[1].split(',')[1];
        stateY = stateY.substr(0,stateY.length-2);
        stateY = parseFloat(stateY)
        return stateY
    },
    getStyle : function(obj,look){
      return window.getComputedStyle(obj, null).style[look];
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@imgSrc:'./assets';
@centerColor : #a2a6a6;
@height : 13.5rem;
@width: 16rem;
@lnHeight : 48px;
@fontColor : rgb(153, 153, 153);
.transition{
  transition:1.5s;
}
ul{
  width: auto;
  height: auto;
}
li{
  width: 100%;
  height: @height;
  line-height: @height;
  display: block;
  text-align: center;
  vertical-align: middle;
  position: relative;
  background:white;
}
.imgMax{
  width: 100%;
  height: 13.5rem;
  overflow: hidden;
  position: relative;
  top: -4rem;
}
img{
  width: 100%;
  display: block;
  margin:0 auto;
  vertical-align: middle;

  transform:translate(-50%,-50%);
  position: absolute;
  left: 50%;
  top: 50%;
  
}
.moveTitle{
  position: absolute;
  width: 100%;
  height: 4rem;
  background:white;
  bottom: 0;
  color: black;
  text-align: center;
  line-height: 4rem;
  font-size: .8rem;
  z-index: 9;
}
.line{
  width: 91%;
  padding-bottom: 5px;
  border-bottom:1px solid #ccc;
  display: inline-block;
  line-height: 2rem;
  position: relative;
  top: -5px;
  text-align: left;
  color: @fontColor;
}

p{
  display: inline;
}
</style>
