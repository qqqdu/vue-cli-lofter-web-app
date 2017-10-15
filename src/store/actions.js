import axios from 'axios'
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
	},
	playMusic : (store,id)=>{
		return axios.post('/playMusic', 
        {
            id : id
        },{
         	headers: {'Content-Type': 'application/json'},
        })
	}
}