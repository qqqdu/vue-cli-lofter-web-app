<template>
  <div class="dynamic">
      <div v-for='item in users'>
          <div class="dyHead">
            <div class="imgHead">
              <img :src="item.head" />
            </div>
              <p>{{item.name}}<span>喜欢了{{item.likeN}}篇</span></p>
              <time >{{item.time}}</time>
          </div>
          <div class="dyBody">
            <div>
              <img  v-for='img in item.imgArr' :src="img.src">
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'el-dynamic',
  components : {
  },
  data () {
    return {
      users : [{
        name : '一起旅行',
        likeN : 4,
        time : new Date(),
        head : require('../../../assets/user/head.png'),
        imgArr : [{
          src : require('../../../assets/user/picture.jpg'),
          href : '###'
         },{
          src : require('../../../assets/user/picture.jpg'),
          href : '###'
         },{
          src : require('../../../assets/user/picture.jpg'),
          href : '###'
         },{
          src : require('../../../assets/user/picture.jpg'),
          href : '###'
         },{
          src : require('../../../assets/user/picture.jpg'),
          href : '###'
         }]
      },{
        name : '一起旅行',
        likeN : 4,
        time : new Date(),
        head : require('../../../assets/user/logo.png'),
        imgArr : [{
          src : require('../../../assets/user/logo.png'),
          href : '###'
         }]
      },{
        name : '一起旅行',
        likeN : 4,
        time : new Date(),
        head : require('../../../assets/user/logo.png'),
        imgArr : [{
          src : require('../../../assets/user/logo.png'),
          href : '###'
         }]
      }]
    }
  },
  computed : {
    ...mapGetters(['CHANGETIME'])
  },
  methods : {

    getTime(date){
      this.CHANGETIME(date);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@imgSrc:'./assets';
@centerColor : #a2a6a6;
@height : auto;
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
@lessColor:#999999;
@lesstColor:#d8d8d8;
@mainColor:rgb(51, 51, 51);
@green:rgb(154, 198, 0);
@bule:rgb(91, 159, 201);
@wordPadding:0 .5rem 0;
@paddingTb:.5rem;
@height3:3rem;
@split:1rem;
.blodA{
  font-weight: bold;
  border-bottom: 1px solid #dcdcdc;
}
.box{
  box-sizing: border-box;
}
.tLeft{
  text-align: left;
}
.transition{
  transition:1.5s;
}
.dynamic{
  background:white;
  height: auto;
  min-height: 100%;
  padding:@paddingTb;
  box-sizing: border-box;
}
.dyHead{
  width: 100%;
  height: @list1;
}
.imgHead{
  width: @list1;
  height: @list1;
  float: left;
  border-radius: 50%;
  overflow: hidden;
}
.dyHead img{
  width: 100%;
  height: 100%;
}
.dyHead p{
  line-height: @list1/2;
  .box;
  .tLeft;
  padding-left: @list1+.5;
  font-size: @mainFont;
}
.dyHead span{
  color: @lessColor;
  margin-left: .5rem;
}
.dyHead time{
 line-height: @list1/2;
 display: block;
 .box;
 .tLeft;
 color:@lessColor;
  padding-left: @list1+.5;
  font-size: @smallFont;
}
.dyBody{
  
  
  padding-left: @list1+.5;
  
}
.dyBody>div{
  display: flex;
  height: auto;
  flex-wrap:wrap;
  justify-content: flex-start;
  align-items: flex-start;

  .blodA;
}
.dyBody img{
  width: 3.4rem;
  height: 3.4rem;
  margin:.2rem;
}

</style>
