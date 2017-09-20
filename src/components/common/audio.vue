<template>
    <div class="audio">
      <audio :src='audioLink' controls="controls">
          Your browser does not support the audio element.
      </audio>
      <div class="playCon">
          <a href="javascript:;" class="playSong"></a>
          <div class="song"></div>
          <div class="author"></div>
      </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'elAudio',
  props : ['audioLink'],
  data () {
    return {
        
     }
  },
  mounted (){
    console.log(this.audioLink)
  },
  components : {

  },
  computed : {
    
  },
  methods : {
    ...mapMutations([])
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@centerColor : #a2a6a6;
@width: 20rem;
@list5 : 5rem;
@list0 : 4rem;
@list1 : 3rem;
@list2 : 2rem;
@imgHead : 2.5rem;
@1Font:1rem;
@lMainFont:.9rem;
@mainFont:.8rem;
@smallFont:.6rem;
@infA:#7d7d7d;
@lessColor:#999999;
@lesstColor:#d8d8d8;
@mainColor:rgb(51, 51, 51);
@green:rgb(154, 198, 0);
@bule:rgb(91, 159, 201);
@wordPadding:0 .5rem 0;
@paddingTb:.5rem;
@height3:3rem;
@split:1rem;
@headHeight:@height*3-1;
@height : 3rem;
@head: 8rem;
.dynamic .audio{
  width: @width;
  height: @list5;
  background: red;
  position: relative;
  padding:0;
}
.playCon{
  width: 100%;
  height: @list2*2;
  position: absolute;
  bottom: 0;
  background:black;
  display: flex;

   align-items: center;
}
.playSong{

  display: block;
  width: 0;
  height: 0px;
  border-bottom: @mainFont solid transparent;
  border-right: @mainFont solid transparent;
  border-top: @mainFont solid transparent;
  border-left: @1Font+.2 solid white;
  cursor: pointer;
}
</style>
