<template>
  <transition name="fade"
              v-on:enter="enter">
  <div class="publish" v-show='publish.show'>
        <a href="javascript:;" 
           class='close'
           v-on:click='close'>×</a>
        <ul>
          <li v-for='(item,index) in publish.items'>
              <img :src='item.imgSrc'
                   v-on:click='gotoPage(item.path)'/>
              <span>{{item.name}}</span>
          </li>
        </ul>    
  </div>
</transition>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name : 'publish',
  components : {

  },
  data () {
    return {
      
    }
  },
  methods : {
    ...mapMutations(['PUBLISHPAGE']), 
    close (){
      let li = document.querySelectorAll('.publish ul li');
      for(let i = 0,len=li.length;i<len;i++){
        li[i].style.transition = `${0.2+0.05*(len-i)}s`;
        li[i].style.transform = `translate3d(0,24rem,0)`;  
      }
      
      this.PUBLISHPAGE(false);
    },
    enter (){
      let li = document.querySelectorAll('.publish ul li');
      setTimeout(function(){
        for(let i = 0,len=li.length;i<len;i++){
          li[i].style.transform = `translate3d(0,0,0)`;
        li[i].style.transition = `${0.2+0.05*(i)}s`;  
        }
      },0)
      
    },
    gotoPage (router){
      this.$router.push(router);
    }
  },
   computed : {
    ...mapState(['publish'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@liWidth:9rem;
@pad:.5rem;
h1, h2 {
  font-weight: normal;
}


h2{
  font-size: 20px;
  line-height: 20px;
}
h2 span{
  float: right;
  font-size: 12px;
}
a {
  color:black;
  text-decoration: none;
} 

time{
  float: right;
}
.center{
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
}
.publish{
    background: white;
    text-align: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    z-index: 99;
    display: flex;
    flex-direction:column-reverse;
}
.publish ul{
  .center;
  
  width: 100%;
  box-sizing: border-box;
  height: 60%;
  
}
ul li{
  width: @liWidth;
  height: @liWidth;
  display: block;
  margin:0rem .3rem .3rem .6rem;
  .center;
  box-sizing: border-box;
  padding:1rem;
  transform:translate3d(0,24rem,0)
}
ul li:nth-child(1){transition:.5s;}
ul li:nth-child(2){transition:.6s;}
ul li:nth-child(3){transition:.7s;}
ul li:nth-child(4){transition:.8s;}
ul li img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
ul li span{
  display: block;
  width: 90%;
  height: 1.4rem;
  line-height: 1.4rem;
  .center;
  background:rgb(204, 204, 204);
  border-radius: .7rem;
 color: rgb(51, 51, 51);
  margin-top: .4rem;
  font-size: .8rem;
}
.close{
  font-size: 1.2rem;
  font-weight: bolder;
  display: block;
  margin:0 auto;
  width: 4rem;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  color: rgb(51, 51, 51);
}
.fade-enter-active, .fade-leave-active {
  transition: .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  background: rgba(204, 204, 204,0);
  transform:translate3d(0,2rem,0);
}
</style>
