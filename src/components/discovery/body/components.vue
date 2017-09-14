<script>
import {mapState, mapMutations} from 'vuex'

export default {
  props : ['contentArr'],
  render: function(h) {
            let child = [],
                 discovery = this.discovery;
            discovery.content.map(function(val){
            	child.push(h(val,{}));
            })
            return h('div',{
            	class : 'contents',
            	style : {
            		width : discovery.content.length * 20 + 'rem'
            	}
            },child)
  },
  computed :{
  	 ...mapState(['discovery'])
  }
}
</script>
