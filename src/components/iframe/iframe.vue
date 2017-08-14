<template>
  <div class="iframe">
      
  </div>
</template>
<script>

import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-iframe',
  data () {
    return {
      iframe : true,
    
     }
  },
  components : {
    
  },
  computed : {
    ...mapState(['user'])
  },
  methods : {
    ...mapMutations([]),
    rollMythings : function(callback){
      this.sonBack = callback;
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
.transition{
  transition:1.5s;
}
.flexCenter{
  display: flex;
  align-items:center;
  flex-warp:center;
}
.iframe{
  width: 100%;
  height: 100%;
  background:white;
  overflow-x:hidden;
  overflow-y:auto;
  position: fixed;
  text-align: left;
  box-sizing: border-box;
  top: 0;
}
.commonActive{
  transition: all .3s ease;
}
p{
  display: inline;
}

</style>
