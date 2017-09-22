let searchMusic = require('./searchMusic');
let playMusic = require('./playMusic');
let router = app=>{
	//let myMongoose = require('./router/myMongoose') //引入数据库
	
	app.get('/gotherr',function(req,res){
		res.send({
			state : true,
			inf : '返回成功'
		})
	})
	app.get('/loginOut',function(req, res){
		let callback = function(data){
			res.send({
				statu : true,
				inf : data
			})
		}
		searchMusic(callback);
	})
	app.get('/playMusic',function(req,res){
		let callback = function(data){
			res.send({
				statu : true,
				inf : data
			})	
		}
		playMusic(callback);
	});
}

module.exports = router;