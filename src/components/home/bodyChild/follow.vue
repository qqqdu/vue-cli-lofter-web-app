<template>
  <div class="follow">
      <div class="myFollow">
          <div class="followHead">我的订阅</div>
          <div></div>
      </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'el-follow',
  components : {

  },
  data () {
    return {
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

.blodA{
  font-weight: bold;
  border-bottom: 1px solid #dcdcdc;
}
.follow{
  width: 100%;
  height: 100%;
}
.follow .followHead{
  .blodA;
}


p{
  display: inline;
}
</style>
