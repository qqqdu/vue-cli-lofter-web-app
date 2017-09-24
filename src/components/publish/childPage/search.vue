<template>
    <div class="search"
         v-on:touchmove='lazyEvent'>
      <div class="header">
          <div v-on:click='clear' id="clear">
              <input type="text"
                     class='searchSong' 
                     v-model='songInf'
                     v-on:focus='focusInput'
                     placeholder="搜索歌名、专辑、艺术家" />
          </div>
          <a href="javascript:;" class="close" v-returnPage>取消</a>
      </div>
      <div class="section">
          <ul>
              <li v-for='(item,index) in songs'>
                  <div class="songIcon">
                      <img :src="item&&item.artists[0].img1v1Url" />
                  </div>
                  <div class="songInf">
                      <h3>{{item.name}}</h3>
                      <p>{{item.artists[0].name}}</p>
                      <p>{{item.album.name}}</p>
                  </div>
              </li>
          </ul>
      </div>
    
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import axios from 'axios'
export default {
  name: 'elSearch',
  data () {
    return {
        scrollEl : null,  //move parent element
        songInf : '',
        iconSear  : require('../../../assets/search.png'),
        onoff : true,
        searchEnd : {},
        songs : [],
        songCount : 0,   //all of lists
        nowLoadImgCount : 10, //begin load ten imgs
        nowCountList : 10, //begin load ten lists
     }
  },
  mounted (){
    this.scrollEl = document.querySelector('.section');
  },
  components : {

  },
  watch : {
    songInf (){
      this.search();
      this.songs.length = 0;
    }
  },
  methods : {
    ...mapMutations([]),
    clear (ev){
      let el = document.querySelector('.searchSong');
      if(ev.target!=el){
        this.songInf = '';
      
        el.focus();
      }
    },
    focusInput (){
      this.songs.length = 0;
      this.search();
    },
    search (){
      if(!this.songInf||!this.onoff)
        return;
      this.onoff = false;
      axios.post('/searchMusic', 
        {
            name:this.songInf,
            limit : 10,
            offset : 0
        },{
         headers: {'Content-Type': 'application/json'},
        })
      .then(response=> {
        let res = JSON.parse(response.data.inf).result;
        this.songs = [...this.songs,...res.songs];
        this.songCount = res.songCount; 
           setTimeout(()=>{
              this.onoff = true;
           },300)
       
      })
      .catch(function (response) {
        console.log(response);
      })
    },
    lazyEvent (){
       let Element = document.querySelector('img');
       console.log(this.scrollEl.getBoundingClientRect())
       //console.log(Element.getBoundingClientRect())
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
@searchHead:2rem;
@split:1.2rem;
@liPx:6rem;
@iconPx:4rem;
.icon{
  width: @iconPx;
  height: @iconPx;
}
.search{
  width: 100%;
  height: 100%;
  background:white;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  padding-top: @headHeight;
  overflow-y: auto;
}
.header{
  @headHeight;
  width: 100%;
  display: flex;
  align-items:center;
  box-sizing: border-box;
  padding:0 @split 0;
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
  border-bottom:1px solid @back;
  padding:0 @split 0;
  box-sizing: border-box;
}
.songIcon{
  .icon;
  position: relative;
}
.songIcon img{
  width: 100%;
  height: 100%;
  border-radius: 5%;
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
.songIcon:after{
  .bad;
  border-top: @iconPx/6 solid transparent;
  border-right: @iconPx/6 solid transparent;
  border-bottom: @iconPx/6 solid transparent;
  border-left: @iconPx/4 solid white;
  transform:translate(-25%,-50%);
}
.songInf{
  font-size: .6rem;
  height: 4rem;
  line-height: .8rem;
  text-align: left;
  box-sizing: border-box;
  padding-left: @split/2;
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
  font-size: .8rem;
  line-height: 1.4rem;
  height: 1.4rem;
  padding:0;
  margin:0;
  .over;
}
.songInf p{
 
  line-height: 1.2rem;
  word-break:break-all;
  .over;
}

.header .searchSong{
  width: 15rem;
  height: @searchHead;
  border:0;
  outline: none;
  color: @color;
  background: url(../../../assets/search.png) @back no-repeat 0 50%;
  background-size: 12%;
  border-radius: @searchHead/2;
  box-sizing: border-box;
  padding-left: @split+1;
  padding-right: @split+1;
  position: relative;
}
.header div{
  position: relative;
  display: flex;
  align-items:center;
}
.header div:before{
  content: "×";
  width: @searchHead/2;
  height: @searchHead/2;
  line-height: @searchHead/2;
  background: @clear;
  color: white;
  position: absolute;
  right: @searchHead/4;
  border-radius: 50%;
  display: block;
  z-index: 9;
  text-align: center;
  font-size: .6rem;
}
.close{
  display: block;
  margin-left: @split/2;
}
</style>
