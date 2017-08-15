<template>
  <div class="footer">
    <ul>
      <li>发表评论</li>
        
    </ul>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex';
export default {
  name: 'el-footer',
  data () {
    return {
      __root:'../../assets'
    }
  },
  computed : {
    ...mapState(['nowPage','arr'])
  },
  methods : {
    ...mapMutations(['GOTOPAGE'])
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
  height: 2rem;
  padding:0;
  display: flex;
  text-align: center;
  background:#fefefe;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items:center;
  border-top: 1px solid rgb(220 ,220 ,220);
}
ul li{
  width: 96%;
  height: 1.5rem;
  background:#eeeeee;
  color: #999999;
  text-align: left;
  line-height: 1.5rem;
  border-right: 5%;
  font-size: .8rem;
  padding-left: .8rem;
  box-sizing: border-box;
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
