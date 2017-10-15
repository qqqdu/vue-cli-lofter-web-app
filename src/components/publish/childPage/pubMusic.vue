<template>
    <div class="pubMusic">
      <div class="header">
          <a href="javascript:;" class="close" v-returnPage>取消</a>
          <div class="center">
              <img :src="user.headImg" />
              <span>{{user.name}}</span>
          </div>
          <img :src="publish.icon.setBlod" class="setBlod">
      </div>
      <div class="section">
          <li>
              <div class="songInf">
                      <h3>{{item&&item.name}}</h3>
                      <p>{{item&&item.artists[0].name}}</p>
                      <p>{{item&&item.album.name}}</p>
              </div>
              <div class="songIcon" >
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
                  </div>
                  <img :src="item.artists[0].img1v1Url"/>
              </div>
          </li>
          <li contenteditable="true" placeholder='dsfsdfsf'>
            
          </li>
          <li>音乐，pray，Sam Smitm，杭州</li>
          <li>音乐，pray，Sam Smitm，杭州</li>
      </div>
      <div class="footer" v-returnPage>
          发布
      </div>
    </div>
</template>
<script>
import {mapState, mapMutations,mapActions} from 'vuex'
import axios from 'axios'
export default {
  name: 'elSearch',
  data () {
    return {
      item : null,
      state : 0,// 0 1 2 3 onload play pause ending
      el : null,
      audioLink:'',
      lock : true,
      iconEl : null
     }
  },
  mounted (){

    this.item = this.publish.pubMusic.chooseMusic;
    this.playMusic(this.item.id).then((parse)=>{
      this.audioLink = JSON.parse(parse.data.inf).data[0].url;
    })
  },
  components : {

  },
  computed : {
    ...mapState(['user','publish'])
  },
  methods : {
    ...mapActions(['playMusic']),
    ...mapMutations(['gotoPageDynamicCon']), 
  playSong (ev){
      let audio = document.getElementsByTagName('audio')[0];
      let state;
      if(!this.lock)
        return;
      
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
    }
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@headHeight:3rem;
@color:rgb(51, 51, 51);
@back:rgb(238, 238, 238);
@clear:rgb(204, 204, 204);
@green:#9ac600;
@lessColor:#999999;
@searchHead:2rem;
@split:1.2rem;
@liPx:5rem;
@iconPx:4rem;
@1Font:1rem;
@pause:.4rem;
@playSong:.6rem;
@list1 : 3rem;
@smallFont:.6rem;
.icon{
  width: @iconPx;
  height: @iconPx;
}
.flexCenter{
  display: flex;
  align-items:center;
}
.pubMusic{
  width: 100%;
  height: 100%;
  background:white;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  padding:@headHeight 0 @headHeight;
 
  overflow-y: auto;
}
.header{
  height:@headHeight;
  width: 100%;
  display: flex;
  align-items:center;
  justify-content:space-between;
  box-sizing: border-box;
  padding:0 @split 0;
}
.footer{
  height:@headHeight;
  width: 100%;
  background: @green;
  bottom: 0;
  line-height: @headHeight;
  text-align: center;
  color: white;
}
.header .center{
  .flexCenter;
  font-weight: bold;
  line-height: @headHeight/2;
}
.header .setBlod{
  width: @headHeight /2;
  height: @headHeight /2;
}
.header .center img{
  width: @headHeight/2;
  height: @headHeight/2;
  border-radius: 50%;
}
.section{
  width: 100%;
  height: auto;
}
.section li{
  height: @liPx;
  width: 100%;
  display: flex;
  align-items:center;
  justify-content:space-between;
  border-bottom:1px solid @back;
  padding:@split/2 @split @split/2;
  box-sizing: border-box;
  font-size: .6rem;
  color: @lessColor;
}
.section li:nth-child(2){
  height: @liPx*1.5;
  text-align: left;
  display: block;
  color: @color;
  outline: none;
}
.section li:nth-child(3){
  height: @liPx/2;
}
.section li:nth-child(4){
  height: @liPx/2;
 
}
.songIcon{
  .icon;
  position: relative;

}
.songIcon img{
  width: 100%;
  height: 100%;
  border-radius: 5%;
  border:1px solid @lessColor;
}
.bad{
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform:translate(-50%,-50%);
}
.songIcon:before{
  .bad;
  background: black;
  width: @iconPx/1.5;
  height: @iconPx/1.5;
  border-radius: 50%;
  opacity: .2;
}
/*
.songIcon:after{
  .bad;
  border-top: @iconPx/6 solid transparent;
  border-right: @iconPx/6 solid transparent;
  border-bottom: @iconPx/6 solid transparent;
  border-left: @iconPx/4 solid white;
  transform:translate(-25%,-50%);
}
*/
.songInf{
  
  height: 4rem;
  line-height: .8rem;
  text-align: left;
  box-sizing: border-box;
  color: @lessColor;
  display: flex;
  align-items:center;
  flex-direction:column;
}
.over{
   text-overflow:ellipsis;
   white-space:nowrap;   
   overflow:hidden;
   width: 10rem;
}
.songInf h3{
  font-size: 1rem;
  line-height: 1.4rem;
  height: 1.4rem;
  padding:0;
  color: @color;
  margin:0;
  .over;
}
.songInf p{
 
  line-height: 1.2rem;
  word-break:break-all;
  .over;
}
.playCon{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform:translateX(-50%);

  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding:0 @smallFont*2.5 0;

  color: white;
  line-height: @list1/3;
}
.playCon a{
  display: flex;
  width: @list1/2;
  height: @list1;
  align-items: center;
}
.playSong{
  display: block;
  width: 0;
  height: 0px;
  border-bottom: @playSong solid transparent;
  border-right: @playSong solid transparent;
  border-top: @playSong solid transparent;
  border-left: @1Font solid white;
  border-radius: 5px;
  cursor: pointer;
}
.pauseSong{
    display: block;
    width: @pause/2;
    height: @pause*3;
    left: @pause/2;
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
