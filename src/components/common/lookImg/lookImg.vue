<template>
  <div class="lookImg">

  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import Exif from 'exif-js'  
export default {
  name: 'el-lookImg',
  mounted(){
    
  },
  props : ["click"], //父组件传递回来的消息,滚动条高度
  data () {
    return {
      __root:'../../assets',
      chooseIndex : 0
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
