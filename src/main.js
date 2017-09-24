import Vue from 'vue'
import rem from './rem/rem'
import App from './App'
import store from './store'
import Vuex from 'vuex'
import router from './router'




Vue.directive('returnPage',{ // return directive
	bind : (ev,el)=>{
		ev.onclick = function(){
			router.go(-1);
		}
	}
})
Vue.directive('lazyImg',{ // lazy load img
	bind : (ev,el)=>{
		ev.onclick = function(){
			router.go(-1);
		}
	}
})


let myVue = new Vue({
    el: '#app',
    router,
    store,
    components : {
    	alert
    },
    render: h => h(App)
}).$mount('#app')
