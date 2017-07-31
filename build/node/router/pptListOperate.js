var pptListOperate = function(app,dirname,users,pptArr){
	app.post('/new_PPT',function(req, res){
		var username = req.session.name,
			pptName = req.body.pptName,
			public =  req.body.public,
			psWord = req.body.psWord;

			if(!username){
				res.send({
							inf : " 未登录!",
							statu : false
						});
				return false;
			}
			if(public=='true'&&!psWord){
				res.send({
							inf : " 非法输入!",
							statu : false
						});
				return false;
			}
			/*
			pptArr.findOne({'pptName':pptName},function(err,ppt_1){ 
					if(err)
						console.log(err);
					if(ppt_1){
						console.log('存在');
						res.send({
							inf : "该PPT已存在，请更换PPT名字!",
							statu : false
						});
						return false;
					}
			});
			*/
			return (function(){
				
				var obj = new pptArr({
					pptName : pptName,
					pptCreateDate : new Date(),
					pptLastAlterDate : new Date(),
					public : public,
					psWord : psWord,
					sectionObj : []
				})
				
				obj.save(function(err,ppt){
					if(err)
						console.log(err);
					console.log('****new ppt id is :'+ppt._id);

					users.findOne({'username':username},function(err,user){  //插入用户的ppt数组
						if(user){
							user.pptIds.push( { "_id":ppt._id } );
							user.save(function(err){
								if(err){
									console.log(err);
								}
								res.send({
									statu : true,
									inf : "创建成功",
									obj : ppt
								})
							})
						}
					})
				})

			})();
	})
	app.post('/deletePPT',function(req, res){
		var username = req.session.name,
			_id = req.body._id;
			return (function(){

				users.findOne({'username':username},function(err,user){
					if(err)
						console.log(err);
					if(user){
						
						console.log(_id);
						console.log(user.pptIds);
						var str = user.pptIds.indexOf({"_id":_id});
						if(str){
							console.log(str);
							user.pptIds.splice(str, 1);
							console.log(user.pptIds);
							user.save(function(err){
								if(err){
									console.log(err);
									return 0;
								}
								pptArr.findOne({'_id':_id},function(err,ppt){
									if(ppt)
										ppt.remove(function(err){
											if(err)
												res.send({
													statu : false,
													inf : "失败"
												})
											
												res.send({
													statu : true,
													inf : "删除成功"
												})
										})
								})
							
							})
						}
					
						
						
						
					}
				});
			})();
	})
	app.post('/editPPT',function(req, res){
		_id = req.body._id;
		pptArr.findOne({"_id":id},function(err,ppt){

		})
	})
	
	app.post('/safe',function(req, res){
		
	})

	app.post('/openPPT',function(req, res){
		var _id = req.body._id,
			returnObj = {};
		return (function(){
			pptArr.findOne({'_id':_id},function(err ,ppts){
				if(!ppts){
					res.send({
						statu : false,
						inf : "找不到此ppt!"
					});
					return false;
				}
				returnObj={
						_id : _id,
						pptName : ppts.pptName,
						pptCreateDate : ppts.pptCreateDate,
						pptLastAlterDate : ppts.pptLastAlterDate,
						public : ppts.public,
						sectionObj : ppts.sectionObj
				};
				res.send({
					statu : true,
					returnObj : returnObj,
					inf : "打开成功"
				})
			});
		})();
	})
}
module.exports = pptListOperate;