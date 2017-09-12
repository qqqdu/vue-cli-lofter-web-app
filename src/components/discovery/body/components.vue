<script>
import recommend from '../bodyChild/recommend'
export default {
  props : ['contentArr'],
  data () {
    return {
      coms : []
     }
  },
  render: function(h) {
            //this.coms.push(h(this.contentArr[0], {})); 
       
            // for(var i = 0; i < this.contentArr.length; i++) {
            //     this.coms.push(h(this.contentArr[i], {}))
            // }
            this.coms.push(h(recommend,{}))
            return h('div', {},
                this.coms)
  }
}
</script>