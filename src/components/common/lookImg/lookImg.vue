<template>
  <div class="lookImg">

      <button id="base64test">click</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import EXIF from 'exif-js'  
export default {
  name: 'el-lookImg',
  mounted(){
    var img = this.headImg;
    function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
                var dataURL = canvas.toDataURL("image/"+ext);
        return dataURL;
    }
    var image = new Image();
    image.src = img;
    var that = this;
    


        var image = new Image();
        image.onload = function() {
            EXIF.getData(image, function() {
                alert(EXIF.pretty(this));
            });
        };
        image.src = img
  
  },
  props : ["click"], //父组件传递回来的消息,滚动条高度
  data () {
    return {
      __root:'../../assets',
      chooseIndex : 0,
       headImg : require('../../../assets/user/picture.jpg'),
       realImg : ''
    }
  },
  computed : {
    ...mapState(['home'])
  },
  methods : {
    ...mapMutations(['GOTONEWS'])
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

</style>
