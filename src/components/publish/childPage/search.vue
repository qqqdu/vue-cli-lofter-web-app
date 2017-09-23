<template>
    <div class="search">
      <div class="header">
          <div v-on:click='clear' id="clear">
              <input type="text"
                     class='searchSong' 
                     v-model='songInf'
                     placeholder="搜索歌名、专辑、艺术家" />
          </div>
          <a href="javascript:;" class="close">取消</a>
      </div>
      <div class="section">
          
      </div>
    
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'elSearch',
  data () {
    return {
        songInf : '',
        iconSear  : require('../../../assets/search.png'),
        onoff : true
     }
  },
  mounted (){
    
  },
  components : {

  },
  watch : {
    songInf (news,old){
      if(!this.songInf||!this.onoff)
        return;
      this.onoff = false;
      axios.post('/searchMusic', this.songInf,{
         headers: {'Content-Type': 'application/json'},
      })
      .then(response=> {
           setTimeout(()=>{
              this.onoff = true;
           },300)
      })
      .catch(function (response) {
        console.log(response);
      })
     
      function callAjax(){

      }
    }
  },
  methods : {
    ...mapMutations([]),
    clear (ev){
      let el = document.querySelector('.searchSong');
      

      if(ev.target!=el){
        el.value = '';
        el.focus();
      }
    },
    search (){
      // axios.post('/searchMusic', {name: '周杰伦'})
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (response) {
      //   console.log(response);
      // });
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
  height: 100%;
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
