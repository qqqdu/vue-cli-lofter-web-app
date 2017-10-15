<template>
  <div class="music"
        >
        
         <el-dynamic v-bind:click="click"></el-dynamic>
         <el-dynamic v-bind:click="click"></el-dynamic>
         <el-dynamic v-bind:click="click"></el-dynamic>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import elDynamic from '../../common/dynamic'
export default {
  name: 'el-music',
  components : {
    'el-dynamic' : elDynamic,
  },
  data () {
    return {
      click : true
    }
  },
  computed : {
    ...mapState(['discovery']),
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
@split:1rem;
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


.dynamic{
  margin-top: @split;
}
p{
  display: inline;
}
</style>
