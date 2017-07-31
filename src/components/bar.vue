<template>
  <div class="bar">
    <a href="javascript:;" v-for='(item, key, index) in arr' v-on:click='gotoPage' >{{item.content}}</a>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data () {
    return {
      arr : [{
        content : "主页",
        src : 'home'
      },{
        content : "相册",
        src : 'album'
      },{
        content : "ppt列表",
        src : 'pptList'
      },{
        content : "文章列表",
        src : 'writing'
      }]
    }
  },
  methods : {
    gotoPage (ev){
      let aLi = document.querySelectorAll('a');
      let index = [].indexOf.call(aLi,ev.currentTarget);
      this.$router.push(this.arr[index].src);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar{
  text-align: left;
  height: auto;
  min-height: 60px;
  padding-left: 40px;
  line-height: 60px;
  box-shadow: 1px 1px 1px black;
  width: 100%;

}

a {
  
  text-decoration: none;
  margin:0 5px 0;
} 
</style>
