let searchMusic = require('./searchMusic');
let playMusic = require('./playMusic');
let readRouter = require('./readRouter');
let router = app=>{
	//let myMongoose = require('./router/myMongoose') //引入数据库
	//测试假数据
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
		    console.log(JSON.parse(name));
		    searchMusic(JSON.parse(name),callback)
		  });
		
	})
	app.post('/playMusic',function(req,res){
		let callback = function(data){
			res.send({
				statu : true,
				inf : data
			})	
		}
		let name = "";
		req.on('data',function(chunk){
			name+= chunk;
		})
		req.on('end', function () {
		    playMusic(JSON.parse(name),callback)
		  });
		playMusic(callback);
	});
}

module.exports = router;