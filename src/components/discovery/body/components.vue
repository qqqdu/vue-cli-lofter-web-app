<template>
  <div class="components">
      <p>{{contentArr}}</p>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-components',  
  render: function(h) {
        this.coms = [];
        console.log(this.contentArr)
        for(var i = 0; i < this.content.length; i++) {
          
            this.coms.push(h(this.content[i], {}))
        }
        console.log(this.coms);
        return h('div', {},
            this.coms)
  },
  props : ['contentArr'],
  data () {
    return {
      coms : []
     }
  },

  computed : {
    ...mapState(['discovery'])
  },
  methods : {
    ...mapMutations([])
  },
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@imgSrc:'./assets';
@centerColor : #a2a6a6;
@height : 12rem;
@width: 16rem;
@lnHeight : 48px;
.transition{
  transition:1.5s;
}
.body{
  width: 100%;
  height: 100%;

}



p{
  display: inline;
}
</style>
