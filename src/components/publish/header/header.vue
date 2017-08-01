<template>
  <div class="header">
    <ul>
      <li v-for='(item, key, index) in arr' v-on:click='gotoPage'>
            <span class="publish">{{item.content}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'el-header',
  data () {
    return {
      __root:'../../assets',
      chooseIndex : 0,
      barType : [
          '旅行',
          '摄影',
          '音乐',
          '设计',
          '女神',
          '运动',
          '电影',
          '娱乐',
          '穿搭'     
      ],
      arr : [{
        content : "首页",
        src : 'home'
      },{ 
        content : "发现",  
        src : 'discovery'
      },{
        content : "发表",
        src : 'publish',
        imgSrc : ''
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
      if(this.chooseIndex===index) //如果下标未改变
        return;
      this.arr[index].imgSrc = this.arr[index].chooseSrc;  //改变按钮状态
      this.arr[this.chooseIndex].imgSrc = this.arr[this.chooseIndex].unChoose;
      this.chooseIndex = index;
    },
    isThree (index){
      return index!==2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@imgSrc:'./assets';
@centerColor : #a2a6a6;
.psCenter{
   position: absolute;
   top: 50%;
   left: 50%;
}

ul{
  width: 100%;
  height: 3rem;
  padding:0;
  display: block;
  text-align: center;
  background:#fefefe;
  position: fixed;
  top: 0;
  left: 0;
}
ul li {
  width: 4rem;
  height: 3rem;
  display: block;
  float: left;
  position: relative;
  font-size: .7rem;
} 
img{
  width: 32px;
  height: 32px;
  display: block;
  margin: 0 auto;

}

.publish{
  width: 30px;
  height: 30px;
  display: block;
  margin: 0 auto;
  border:1px solid @centerColor;
  background:@centerColor;
  border-radius: 50%;
  margin-left: -15px;
  margin-top: -15px;
  .psCenter;
}
.publish:after{
  content: ' ';
  width: 36px;
  height: 36px;
  .psCenter;
  margin-left: -19px;
  margin-top: -19px;
  border:1px solid @centerColor;
  border-radius: 50%;
}
p{
  display: inline;
}
</style>
