<template>
    <div class="audio">
      <img :src="audio.audioImg">
      <audio 
        class="audio"
        v-show='false'>
          Your browser does not support the audio element.
      </audio>
      <div class="playCon">
          
          <a href="javascript:;" 
             v-on:click='playSong'>
                <span class="playSong"></span>
          </a>
          <div>
            <p class="song">马叫声</p>
            <p class="author">马</p>
          </div>
      </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'elAudio',
  props : ['audio'],
  data () {
    return {
        state : 0,// 0 1 2 3 onload play pause ending
        audioLink:this.audio.audioLink,
        el : null,
        iconEl : null
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
    ...mapMutations([]),
    playSong (ev){
      let audio = ev.target.parentNode.parentNode.parentNode.getElementsByTagName('audio')[0];
      let state;
      state = this.state;
      switch(state){
          case 0:
            this.initListen(audio);
            this.el = ev.target.parentNode;
            this.iconEl = ev.target;
            audio.src = this.audioLink;
            break;
          case 1:
            audio.play();
            break;
          case 2:
            audio.pause();
            
            break;
          case 3:
            
            break;
          default:
            return;
      }
    },
    initListen (obj){
      obj.onplay = this.onplay;
      obj.onpause = this.onpause;
      obj.onended = this.onended;
      obj.oncanplay = this.oncanplay;
      obj.onloadeddata = this.onloadeddata;
    },
    onloadeddata (){
     this.state = 1;
     this.el.click();
      
    },
    onplay (){
      this.iconEl.setAttribute('class','pauseSong');

      this.state = 2;
      console.log('播放')
    },
    onended (){
      this.iconEl.setAttribute('class','playSong');
      console.log(onended)
      this.state = 1;
    },
    onpause (){
      this.iconEl.setAttribute('class','playSong');
      this.state = 1;
      console.log('暂停')
    },
    oncanplay (){
       
      // 
    }
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
@playSong:.6rem;
@pause:.4rem;
.dynamic .audio{
  width: @width;
  height: @list5*3;
  background: red;
  position: relative;
  padding:0;
  margin:@split 0 @split;

}
.audio img{
  width: 100%;
  height: 100%;
}
.playCon{
  width: 100%;
  height: @list1;
  position: absolute;
  bottom: 0;
  background:rgba(35, 37, 40, 0.9);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding:0 @smallFont 0;
  color: white;
  line-height: @list1/3;
}
.playCon a{
  display: flex;
  width: @list1/2;
  height: @list1;
  align-items: center;
}
.playCon div{
  margin-left: @1Font/2;
  font-size: @smallFont;
}
.playCon div p:nth-child(1){
  font-weight: bold;
}
.playSong{
  display: block;
  width: 0;
  height: 0px;
  border-bottom: @playSong solid transparent;
  border-right: @playSong solid transparent;
  border-top: @playSong solid transparent;
  border-left: @1Font solid white;
  cursor: pointer;
}
.pauseSong{
    display: block;
    width: @pause/2;
    height: @pause*3;
    background:white;
    position: relative;
  }
.pauseSong:after{
    width: @pause/2;
    height: @pause*3;
    background:white;
    position: absolute;
    left: @pause;
    top: 0;
    content: "";
  }
</style>
