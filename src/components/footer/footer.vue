<template>
  <div class="footer">
    <ul>
      <li v-for='(item, key, index) in arr' v-on:click='gotoPage'><span>{{item.content}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      arr : [{
        content : "首页",
        src : 'home'
      },{
        content : "发现",
        src : 'discovery'
      },{
        content : "发表",
        src : 'publish'
      },{
        content : "消息",
        src : 'news'
      },{
        content : "我的",
        src : 'mine'
      }]
    }
  },
  methods : {
    gotoPage (ev){
      let aLi = document.querySelectorAll('li');
      let index = [].indexOf.call(aLi,ev.currentTarget);
      this.$router.push(this.arr[index].src);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@imgSrc:'../../assets/';
.bar{
  

}
ul{
  width: 100%;
  height: 60px;
  padding:0;
  display: block;
  text-align: center;
  line-height: 60px;
  position: absolute;
  bottom: 0;
  left: 0;
}
ul li {
  width: 4rem;
  height: 60px;
  display: block;
  float: left;

  font-size: .7rem;
} 
</style>
