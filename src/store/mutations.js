import Exif from 'exif-js'
import Vue from 'vue'
/*myself components*/
import recommend from '../components/discovery/bodyChild/recommend'

export default {
	ADDCOUNT :(state,payload)=>{
				state.count[0].name = 'hei';
		},
	GOTOPAGE: (state,page)=>{  
		state.nowPage = page;
	},
	GOTODISCOVER : (state,page)=>{
		let discovery = state.discovery;
		discovery.whichShow[discovery.nowPage] = false;
		discovery.nowPage = page;
		discovery.whichShow[page] = true;
		console.log(discovery.whichShow)
		//数组不能重复添加
		if(findEqueal(discovery.content,discovery.pageAll[page])==undefined){
			discovery.content.push(discovery.pageAll[page]);
		}
		document.querySelector('.contents').style.left = -(page)*20 + 'rem';
		function findEqueal(arr,trueVal){
			return arr.find(function(val){
				return trueVal===val;
			});
		}
	},
	WHICHSHOW : (state,val) =>{  //discovery page which show
		let discovery = state.discovery;
		findIt(val);
		function findIt(val){
          var resulte = discovery.pageAll[discovery.nowPage];
          if(val===resulte)
            return true;
          else
            return false;
        }
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