let router = app=>{
	//let myMongoose = require('./router/myMongoose') //引入数据库
	

	app.post('/loginOut',function(req, res){
		res.send({
			statu : true,
			inf : "获取成功"
		})
	})
}

module.exports = router;