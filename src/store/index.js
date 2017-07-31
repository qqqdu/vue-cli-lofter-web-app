import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);
/*
const state = {
	userInf : '', //用户信息
	login : null, //是否登录
}
*/
export default new Vuex.Store({
	state : {
		count : [{
			name : 'xiaoqiang',
			done : true
		},{
			name : 'xiaohong',
			done : false
		}]
	},
	getters,
	mutations,
	actions 
})
1233 