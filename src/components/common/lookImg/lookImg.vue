<template>
  <div class="lookImg" >
    
      <img :src="headImg" id="img1" v-on:touchstart='clickAll=true'>
      <transition name="slide-fade">
          <div class="photoInf" v-show='!clickAll'>
              <p v-for='(item,index) in photoInf.imgMapInf'>
                  <span>{{photoInf.textArr[index]}}</span>   <span>{{item}}</span>
              </p>
          </div>
      </transition>
      <button v-on:click='getImgInf'>i</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import EXIF from 'exif-js'  
export default {
  name: 'el-lookImg',
  mounted(){
    // var img = this.headImg;
    // function getBase64Image(img) {
    //     var canvas = document.createElement("canvas");
    //     canvas.width = img.width;
    //     canvas.height = img.height;
    //     var ctx = canvas.getContext("2d");
    //     ctx.drawImage(img, 0, 0, img.width, img.height);
    //     var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
    //             var dataURL = canvas.toDataURL("image/"+ext);
    //     return dataURL;
    // }
    // var image = new Image();
    // image.src = img;
    // var that = this;
    
// document.getElementById("img1").onclick = function() {
//     EXIF.getData(this, function() {
//         var make = EXIF.getTag(this, "Make"),  
//             model = EXIF.getTag(this, "Model");
//         alert("I was taken by a " + make + " " + model);
//     });

// }

        // var image = new Image();
        // image.onload = function() {
        //     EXIF.getData(image, function() {
                
        //         let it = EXIF.getTag(this, 'Orientation');
        //         console.log(it)
        //     });
        // };
        // image.src = this.headImg;
  
  },
  props : ["click"], //父组件传递回来的消息,滚动条高度
  data () {
    return {
      __root:'../../assets',
      clickAll : true,
      chooseIndex : 0,
       headImg : require('../../../assets/user/myImg.jpg'),
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
      });
      return true;
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

.lookImg{
  width: @width;
  height: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  padding:0;
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

.slide-fade-enter-active {
  transition: all .3s;
}
.slide-fade-leave-active {
  transition: all .3s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  width: 0;
  height: 0;
}
</style>
