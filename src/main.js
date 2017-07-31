import Vue from 'vue'
import App from './App'
import store from './store'
import Vuex from 'vuex'
import router from './router'

new Vue({
    el: '#app',
    router,
    store,
    components : {
    	alert
    },
    render: h => h(App)
}).$mount('#app')


