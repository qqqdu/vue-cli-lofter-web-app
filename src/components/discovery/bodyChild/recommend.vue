<template>
  <div class="recommend" v-finger:touch-start="touchStart">
    <ul>
      <li v-for='(item,key,index) in userImg'>
          <div class="imgMax">
              <img src="../../../assets/user/IMG_20160716_131527.jpg" class="icon">
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
      chooseIndex : 0,
      contain : {
        h : null   //height
      },
      list : {
        h : null
      },
      directly : 0,
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
      this.$emit("rollMything",this.rollMove);
    },
    rollMove: function(ev) {
     let directly = ev.deltaY; //记录距离方向
     let recommend = document.querySelectorAll('.body')[0].scrollTop;
     if(this.directly>0)
        this.num-= 1;
      else if(this.directly<0)
        this.num+= 1;
      else{

      }
     document.querySelectorAll('.moveTitle')[1].style.bottom = this.num + 'px';
     //let top = recommend.documentElement.scrollTop;
     // console.log(recommend.scrollTop)
    },
    touchEnd : function(ev){

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
}
.imgMax{
  width: 100%;
  height: 11.5rem;
  overflow: hidden;
  position: relative;
  top: -32px;
}
img{
  width: 100%;
  display: block;
  margin:0 auto;
  vertical-align: middle;
  /*
  transform:translate(-50%,-50%);
  position: absolute;
  left: 50%;
  top: 50%;
  */
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
  z-index: 999;
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
