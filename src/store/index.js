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
		nowPage : 0,
		page : {
			bodyHeight: null
		},
		discovery : {
			nowPage : 0
		}
	},
	getters,
	mutations,
	actions 
})
1233 