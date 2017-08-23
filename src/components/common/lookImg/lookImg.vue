<template>
  <div class="lookImg">

      <img :src="headImg" id="img1">
      <button v-on:click='getImgInf'>click</button>
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
    
document.getElementById("img1").onclick = function() {
    EXIF.getData(this, function() {
        var make = EXIF.getTag(this, "Make"),  
            model = EXIF.getTag(this, "Model");
        alert("I was taken by a " + make + " " + model);
    });

}

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
      chooseIndex : 0,
       headImg : require('../../../assets/user/picture.jpg'),
       realImg : '',
       photoInf : {
          textArr : {
            Make : '品牌',
            Model : '型号',
            FocalLength : '焦距',
            FNumber : '光圈',
            ShutterSpeedValue : '快门速度',
            ISO : 'ISOSpeedRatings',
            ExposureBiasValue : '曝光补偿',
            ApertureValue : '镜头'
          }

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
      console.log('ok')
      EXIF.getData(img, function() {
          var make = EXIF.getTag(this, "Make"),  
              model = EXIF.getTag(this, "Model");
          console.log(make)
          ev.target.value = "I was taken by a " + make + " " + model

      });
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
.flex{
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-item:center;
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
  padding:0;
  background:black;
  display: block;
  text-align: left;
  float: left;
  overflow: hidden;
  box-sizing: border-box;
  .flex;
}
#img1{
  width: 400px;
  height: 400px;
}
</style>
