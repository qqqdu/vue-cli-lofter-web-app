<template>
  <div class="footer">
    <ul>
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
  mounted (){
    this.arr[this.nowPage].imgSrc = this.arr[this.nowPage].chooseSrc
  },
  data () {
    return {
      __root:'../../assets'
    }
  },
  computed : {
    ...mapState(['nowPage','arr'])
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
