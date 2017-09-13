import Exif from 'exif-js'
import Vue from 'vue'
/*myself components*/
import recommend from '../components/discovery/bodyChild/recommend'

export default {
	ADDCOUNT :(state,payload)=>{
				state.count[0].name = 'hei';
		},
	GOTOPAGE: (state,page)=>{  //跳转页面
		state.nowPage = page;
	},
	GOTODISCOVER : (state,page)=>{
		let discovery = state.discovery;
		discovery.nowPage = page;
		//数组不能重复添加
		discovery.content.push(discovery.pageAll[page]);
		document.querySelector('.contents').style.left = -(page)*20 + 'rem';
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