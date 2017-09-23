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
	app.post('/searchMusic',function(req, res){
		let callback = function(data){
			res.send({
				statu : true,
				inf : data
			})
		}
		let name="";
		req.on('data', function (chunk) {
		    name += chunk;
		  });
		req.on('end', function () {
		    console.log('POST data received');
		    searchMusic(name,callback)
		  });
		;
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