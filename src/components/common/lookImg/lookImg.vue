<template>
  <transition name='slide-img' >
      <div class="lookImg" v-show="imgInf.showImg">
          <img 
              :src="headImg" 
              id="img1" 
              v-on:click='returnContent'
              >
          <transition name="slide-fade">
              <div class="photoInf" v-show='mask'>
                  <p v-for='(item,index) in photoInf.imgMapInf'>
                      <span>{{photoInf.textArr[index]}}</span>   
                      <span>{{item}}</span>
                  </p>
              </div>
          </transition>
          <div class="mask" v-show='mask' v-on:click='mask=false'></div>
          <button v-on:click='getImgInf'>i</button>
      </div>
  </transition>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import EXIF from 'exif-js'  
export default {
  name: 'el-lookImg',
  mounted(){
    
  },
  props : ["click","imgInf"], //父组件传递回来的消息,滚动条高度
  data () {
    return {
      __root:'../../assets',
      mask : false,
      chooseIndex : 0,
       headImg : require('../../../assets/user/head.png'),
       realImg : '',
       photoInf : {
          textArr : {
            Make : '品牌',
            Model : '型号',
            FocalLength : '焦距',
            FNumber : '光圈',
            ShutterSpeedValue : '快门速度',
            ISOSpeedRatings : 'ISO',
            ExposureBiasValue : '曝光补偿',
            ApertureValue : '镜头'
          },
          imgMapInf : {},
       }
    }
  },
  computed : {
    ...mapState(['home'])
  },
  methods : {
    ...mapMutations(['GOTONEWS']),
    getImgInf (ev){
      let img = ev.target.parentNode.firstChild;
      let that = this;
      that.clickAll = false;
      EXIF.getData(img, function() {
          let allTags = EXIF.getAllTags(this);
          let obj = {};
          Object.keys(that.photoInf.textArr).map(function(val){
                obj[val]  = allTags[val];
          })
          allTags = null;   
          that.photoInf.imgMapInf = obj;
          that.mask = true;
      });
      return true;
    },
    returnContent(ev){
      this.imgInf.showImg = false;
      this.$emit('closeImg');
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

@photoInfH: auto;
@photoLine:1.5rem;
@spanLW : 4rem;
.flex{
    display: flex;
    
    justify-content:center;
    align-items:center;
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
.mask{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.lookImg{
  width: @width;
  height: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  padding:0 !important;
  background:black;
  display: block;
  text-align: left;
  float: left;
  overflow: hidden;
  box-sizing: border-box;
  .flex;
}

.lookImg img{
  width: 100%;
  opacity: 1;
}
.photoInf{
  width: @width;
  height: @photoInfH;
  line-height: @photoLine;
  font-family: 微软雅黑;
  background:rgba(0, 0, 0, 0.5);
  font-size: @smallFont;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: @paddingTb;
  padding-bottom:@paddingTb+1.5;
  box-sizing: border-box;

}
.photoInf p span:nth-child(1){
  color: @centerColor;
  display: inline-block;
  width: @spanLW;
  text-align: right;
}
.photoInf p span:nth-child(2){
  color: white;
  width: @spanLW*2;
  padding: @paddingTb;
}

button{
  position: absolute;
  display: block;
  width: @1Font;
  height: @1Font;
  bottom: @1Font;
  left: @1Font;
  line-height: @1Font;
  text-align: center;
  font-family: Verdana;
  outline: none;
  border:none;
  border-radius: 50%;
  padding:0;
}

.slide-fade-enter-active, .slide-fade-leave-active {
   transition: all .1s
}

.slide-fade-enter, .slide-fade-leave-to {
   transform: translate3d(-@width/4,100px,0);
}
.slide-img-enter-active{
  transition:.3s;
}
.slide-img-leave-active{
  transition:.3s;
}
.slide-img-enter, .slide-img-leave-to {
   background:rgba(0, 0, 0, 0);
   opacity: 0;
}
</style>
