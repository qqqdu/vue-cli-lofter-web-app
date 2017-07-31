<template>
	<div>
		<span @click="gotoHome">{{message}}</span>
	</div>
</template>
<script type="text/javascript">
	export default {
	  name: 'hello',
	  data () {
	    return {
	      message: '这是相册'
	    }
	  },
	  methods : {
	  	gotoHome (){
	  		this.$router.push({path:'/first'})
	  	}
	  }
	}
</script>
<style type="text/css" scoped>
	a{
		color: red;
	}
</style>