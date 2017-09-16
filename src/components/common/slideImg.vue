<template>
    <div class="slideImg">
      <div class="moveContent"
           v-on:transitionend="addTransition">
         <a v-for='img in imgObj' href="javascript:;">
            <img :src="img.imgUrl" />
         </a>
      </div>
      <div class="imgBtn">
          <a v-for='(item , index) in imgObj' href="javascript:;"
             v-bind:class='index==moveImg.nowNum?"choose":""'
              ></a>          
      </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'slideImg',
  data () {
    return {
        selfImg : [],
        moveImg : {
          width : -20,
          el : null,
          timer : null,
          nowNum : 0,
          allNum : 0,
          duration : 1000
        }
     }
  },
  mounted (){

    this.init();
    
  },
  props : ['imgObj'],
  components : {

  },
  computed : {
    
  },
  methods : {
    ...mapMutations([]),
    moveLeft (){
      this.moveImg.width-=20;
      this.moveImg.nowNum++;
      this.moveNow();
    },
    moveNow (){
      this.moveImg.el.style.transition = '.3s';
      this.moveImg.el.style.transform = `translate3d(${this.moveImg.width}rem,0,0)`;
    },
    init (){
      this.moveImg.el = document.querySelector(".moveContent");
      this.moveImg.allNum = this.imgObj.length;
      this.moveImg.el.style.width = (this.imgObj.length+2)*20 + 'rem';
      this.fillHTML();
      this.beginTimer();
      this.bindEvent();
    },
    beginTimer (){
      if(this.moveImg.timer===null)
        this.moveImg.timer = setInterval(this.moveLeft,this.moveImg.duration);
    },
    stopTimer (){
      clearInterval(this.moveImg.timer);
      this.moveImg.timer = null;
      this.moveImg.el.style.transition = '-1s';
    },
    bindEvent (){
      let el = this.moveImg.el,
              elX,
              nowX,
              moveX,
              startT,
              endT;
      el.addEventListener('touchstart',(ev)=>{
        elX = ev.touches[0].clientX;
        startT = new Date();
        el.addEventListener('touchmove',(ev)=>{
           this.stopTimer();
           moveX = ev.touches[0].clientX - elX;
           nowX = moveX + document.documentElement.clientWidth*this.moveImg.width/20;
           this.moveImg.el.style.transform = `translate3d(${nowX}px,0,0)`;
           endT = new Date();
        })
        el.addEventListener('touchend',(ev)=>{
            this.beginTimer();
            console.log(endT-startT)
            if(Math.abs(moveX)>=document.documentElement.clientWidth/2)
              console.log(document.documentElement.clientWidth/2);
            this.moveNow();
        })  
      })

      
    },
    addTransition (){
        if(this.moveImg.nowNum>=this.moveImg.allNum){
          this.moveImg.nowNum=0;
          this.moveImg.width = -20;
          this.moveImg.el.style.transition = '-1s';
          this.moveImg.el.style.transform = `translate3d(${this.moveImg.width}rem,0,0)`;
        }
    },
    fillHTML (){
      let first = this.moveImg.el.firstChild.cloneNode(true);;
      let last = document.importNode(this.moveImg.el.lastChild,true);;
      let newEl = document.createDocumentFragment();
      newEl.appendChild(last);
      this.moveImg.el.insertBefore(newEl,this.moveImg.el.firstChild);
      this.moveImg.el.appendChild(first);
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

.slideImg{
  width: @width;
  overflow: hidden;
  height: @list0*2;
  position: relative;
  text-align: center;
}
.moveContent{
  width: auto;
  height: 100%;
  display: flex;
  flex-direction:row;
  position: relative;
  transition:.3s;
  transform:translate3d(-20rem,0,0);
}
.moveContent a{
  height: 100%;
}
.moveContent a img{
  width: @width;
}
.imgBtn{
  width: 100%;
  height:@1Font;

  position: absolute;
  bottom: @paddingTb;
  left: 0;
}
.imgBtn a{
  width: @mainFont;
  height: @mainFont;
  border-radius: 50%;
  background:rgb(112, 132, 139);
  display: inline-block;
  margin:.4rem;
}
.imgBtn .choose{
  background: rgb(57, 97, 99)
}
</style>
