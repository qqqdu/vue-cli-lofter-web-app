<template>
  <div class="footer">
    <ul :page='initPage()'>
      <li v-for='(item, key, index) in arr' v-on:click='gotoPage'>
          <div v-if="isThree(key)">
            <img :src="item.imgSrc" />
            <p>{{item.content}}</p>
          </div>
          <div v-else>
            <span class="publish"></span>
          </div>
      </li>
        
    </ul>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex';
export default {
  name: 'el-footer',
  data () {
    return {
      __root:'../../assets',
      arr : [{
        content : "首页",
        src : 'home',
        imgSrc : require('../../assets/home.png'),
        unChoose : require('../../assets/home.png'),
        chooseSrc : require('../../assets/home0.png')
      },{ 
        content : "发现",  
        src : 'discovery',
        imgSrc : require('../../assets/scan2.png'),
        unChoose : require('../../assets/scan2.png'),
        chooseSrc : require('../../assets/scan0.png')
      },{
        content : "发表",
        src : 'publish',
        imgSrc : ''
      },{
        content : "消息",
        src : 'news',
        imgSrc :  require('../../assets/notification.png'),
        unChoose : require('../../assets/notification.png'),
        chooseSrc : require('../../assets/notification0.png')
      },{
        content : "我的",
        src : 'mine',
        imgSrc :  require('../../assets/person2.png'),
        unChoose : require('../../assets/person2.png'),
        chooseSrc : require('../../assets/person0.png')
      }]
    }
  },
  computed : {
    ...mapState(['nowPage'])
  },
  methods : {
    ...mapMutations(['GOTOPAGE']),
    gotoPage (ev){
      let aLi = document.querySelectorAll('.footer li');
      let index = [].indexOf.call(aLi,ev.currentTarget);
      this.$router.push(this.arr[index].src);
      if(this.nowPage===index) //如果下标未改变
        return;
      this.arr[index].imgSrc = this.arr[index].chooseSrc;  //改变按钮状态
      this.arr[this.nowPage].imgSrc = this.arr[this.nowPage].unChoose;
      this.GOTOPAGE(index);

    },
    isThree (index){
      return index!==2
    },
    initPage (){
      
      this.arr[this.nowPage].imgSrc = this.arr[this.nowPage].chooseSrc
      return;
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
  bottom: 0;
  left: 0;
}
ul li {
  width: 4rem;
  height: 3rem;
  display: block;
  float: left;
  position: relative;
  font-size: .7rem;
  background:white;
} 
img{
  width: 1.5rem;
  height: 1.5rem;
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
