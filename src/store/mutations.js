import Exif from 'exif-js'
import Vue from 'vue'
export default {
	ADDCOUNT :(state,payload)=>{
				state.count[0].name = 'hei';
		},
	GOTOPAGE: (state,page)=>{  //跳转页面
		state.nowPage = page;
	},
	GOTODISCOVER : (state,page)=>{
		state.discovery.nowPage = page;
	},
	GOTOHOME : (state,page)=>{
		state.home.nowPage = page;
	},
	GOTONEWS : (state,page)=>{
		state.news.nowPage = page;
	},
	GETBODYHEIGHT : state=>{
//		let footer = document.querySelector('.footer').offsetHeight;
//		let header = document.querySelector('.header').offsetHeight;
		console.log(document.querySelector('.header'))
		state.page.bodyHeight = document.body.offsetHeight - footer -header; 
		console.log(state.page.bodyHeight)
	},
	gotoPageDynamicCon : (state,that)=>{  //goto page
		
		that.$router.push('common/dynamicCon');
	}
}