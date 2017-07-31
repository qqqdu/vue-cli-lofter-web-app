export default {
	addCount : (store)=>{
		axios.post('loginOut',{
			json : {
				name : 'duhao',
				year : 134
			}
		}).then(function(res){
			console.log(res);
		}).catch(function(res){
			console.log(res)
		})
	}
}