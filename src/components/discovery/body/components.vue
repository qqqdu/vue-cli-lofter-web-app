<script>
import {mapState, mapMutations} from 'vuex'

export default {
  props : ['contentArr'],
  render: function(h) {
            let child = [],
                 discovery = this.discovery;
            discovery.content.map(function(val){
              let block = findIt(val);
              console.log(block)
            	child.push(h(val,{
                  style : {
                    display : block
                  }
            	}));
            })
            return h('div',{
            	class : 'contents',
            	style : {
            		//width : discovery.content.length * 20 + 'rem'
            	}
            },child)
            function findIt(val){
              var resulte = discovery.pageAll[discovery.nowPage];
              if(val===resulte)
                return 'block';
              else
                return 'none';
            }
  },
  computed :{
  	 ...mapState(['discovery'])
  }
}
</script>
