<template>
  <div class="article">
      <h1>{{listObj.title}}</h1>
      <p class="inf"><span>{{listObj.author}}</span><span>{{listObj.publish}}</span></p>
      <div class="content">{{listObj.content}}</div>
      <div v-bind:attr-data='count[0].name'>{{count[0].name}}</div>
  </div>
</template>

<script>
import {mapGetters,mapState,mapMutations} from 'vuex'
export default {
  name: 'article',
  data () {
    return {
      listObj : {
        title : '这是标题1',
        publish : '2017/07/24',
        content : "这是内容",
        author : 'Davide',
        agree : 12,
        reject : 23,
        look : 233,
        src : '2323'
      }
    }
  },
  computed : {
    ...mapState(['count'])
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
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.article{
  width: 90%;
  margin:0 auto;
}
.inf{
  text-align: left;
  padding-left: 60%;
}
.content{
  text-align: left;
}
</style>
