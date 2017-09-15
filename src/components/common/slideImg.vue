<template>
    <div class="slideImg">
      <div class="moveContent">
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
          allNum : 0
        }
     }
  },
  mounted (){
    let that =  this;
    this.init();
    this.fillHTML();
    this.moveImg.timer = setInterval(function(){
      that.moveLeft();
    },2000);
  },
  props : ['imgObj'],
  components : {

  },
  computed : {
    
  },
  methods : {
    ...mapMutations([]),
    moveLeft (){
     
      this.moveImg.nowNum++;
     
      this.moveImg.width-=20;
      if(this.moveImg.nowNum===this.moveImg.allNum){
        this.moveImg.nowNum=0;
        this.moveImg.width = -20;
      }
      this.moveImg.el.style.transform = `translate3d(${this.moveImg.width}rem,0,0)`;
    },
    init (){
      this.moveImg.el = document.querySelector(".moveContent");
      this.moveImg.allNum = this.imgObj.length;
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
  height: @list0*3;
  position: relative;
  text-align: center;
}
.moveContent{
  width: auto;
  height: 100%;
  display: flex;
  flex-direction:row;
  position: relative;
  transition:1s;
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
