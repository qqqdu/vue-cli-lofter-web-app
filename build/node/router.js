let router = app=>{
	app.post('/loginOut',function(req, res){
		res.send({
			statu : true,
			inf : "获取成功"
		})
	})
}

module.exports = router;