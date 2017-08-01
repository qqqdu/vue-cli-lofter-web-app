
export default {
	ADDCOUNT :(state,payload)=>{
				state.count[0].name = 'hei';
		},
	GOTOPAGE: (state,page)=>{  //跳转页面
		state.nowPage = page;
	},
	GOTODISCOVER : (state,page)=>{
		state.discovery.nowPage = page;
	}
}