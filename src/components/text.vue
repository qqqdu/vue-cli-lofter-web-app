<template>
  <div class="pptList">
     <a href="javascript:;" v-on:click='ckFn'>点击</a>
    <p v-bind='count'>{{doneObj}}</p>
  </div>
</template>
<script>
 import {mapGetters,mapState,mapMutations,mapActions} from 'vuex';
export default {
  data () {
    return {
        
    }
  },
  computed: {
    ...mapState ([
       'count'
    ]),
    ...mapGetters(['doneObj','doneAny']),  //利用扩展运算符把对象加载在computed里面
    chage :()=>{
      return this.count;
    }
  },
  methods : {
    ...mapActions(['addCount']),
    ckFn (){
      this.addCount();
    } 
  }
}


</script>
 
<style>
</style>