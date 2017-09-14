<template>
    <div class="slideImg">
      <div class="moveContent">
         <a v-for='img in imgObj' href="javascript:;">
            <img :src="img.imgUrl" />

         </a>
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
     }
  },
  mounted (){
    // this.imgObj.map(function(){
    //   this.selfImg.push({
    //     imgUrl : require('')
    //   })
    // })
  },
  props : ['imgObj'],
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

.slideImg{
  width: @width;
  overflow: hidden;
  height: @list0*3;
}
.moveContent{
  width: auto;
  height: 100%;
  display: flex;
  flex-direction:row;
  position: relative;
}
.moveContent a{
  height: 100%;
}
</style>
