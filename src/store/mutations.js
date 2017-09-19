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
		let aLi = document.querySelectorAll('.discovery .header .list .scroll a');
		removeClass(aLi[discovery.nowPage],'blodA')
		console.log(page);
      	addClass(aLi[page],'blodA')
		discovery.whichShow[discovery.nowPage] = false;
		discovery.nowPage = page;
		discovery.whichShow[page] = true;
		this.a.REQUIRECOM(state,page)
		document.querySelector('.contents').style.transform = `translate3d(${-page*20}rem,0,0)`;
	},
	REQUIRECOM : (state,page)=>{
		let discovery = state.discovery;
		
		//数组不能重复添加
		if(!discovery.pageAll[page])
			return false;
		if(findEqueal(discovery.content,discovery.pageAll[page])==undefined){
			discovery.content.push(discovery.pageAll[page]);
		}
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