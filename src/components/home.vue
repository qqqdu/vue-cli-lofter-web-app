<template>
  <div class="home">
      <ul>
          <li v-for='item in listObj'>
              <a :href="item.src"><h2>{{item.title}}<span>类型:{{item.type}}</span></h2></a>
              <p> 
                <span>{{item.author}}</span>
                <a href="javascript:;">赞:({{item.agree}})</a>
                <a href="javascript:;">不赞({{item.reject}})</a>
                <time>{{item.publish}}</time>
              </p>
          </li>
      </ul>
  </div>
</template>

<script>

export default {
  name : 'home',
  data () {
    return {
      listObj : [{
        title : '这是标题1',
        publish : '2017/07/24',
        author : 'Davide',
        agree : 12,
        reject : 23,
        look : 233,
        src : '/article',
        type : '文章'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  width:90%;
  margin:0 auto;
  text-align: left;
}

li {
  display: inline-block;
  margin: 0 10px;
  border-bottom: 1px solid #ccc;
  width: 100%;
  padding:2px;
  line-height: 20px;
}
h2{
  font-size: 20px;
  line-height: 20px;
}
h2 span{
  float: right;
  font-size: 12px;
}
a {
  color:black;
  text-decoration: none;
} 

time{
  float: right;
}
</style>
