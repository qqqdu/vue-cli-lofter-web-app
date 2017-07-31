
var findPPT = function(pptArr,users,obj,fn){ //obj 查询条件 {page:1,sort:1,type:"pptCreateDate"}
		
	var pptIds = users.pptIds,
		returnObj = [],
		sectionObj,
		len = pptIds.length, //该用户总ppt数目
		obj = JSON.parse(obj),
		sort = obj.sort, //排序方式
		gt,
		type,
		page = obj.page, //当前请求页数
		pageNum = obj.pageNum, //一页分为几条
		lastPage = obj.page-1;
		for(var key in obj.sort){
			type = key; //排序方式
			gt = obj.sort[key]; //逆序或者顺序
			if(gt===-1)
				gt = "$lt";
			else
				gt = "$gt";
		}
	if(len===0){
		fn && fn([]);
		return true;
	}
	pptArr.find({"_id":{
			"$in" : pptIds
		}}).count(function(err,count){
			
			var query=pptArr.find({"_id":{
				"$in" : pptIds
			}});
			query.sort(sort);
			query.skip((page-1)*pageNum);
			query.limit(6);
			query.exec(function(err,ppt){
		
					  for(var i = 0;i<ppt.length;i++){
							ppts = ppt[i];
							if(ppts.sectionObj[0]){
								
								sectionObj =ppts.sectionObj;
								sectionObj.length = 1;
								sectionObj = JSON.stringify(sectionObj);
							}
							else{
								sectionObj = null;
							}
							
							returnObj.push({
								pptName : ppts.pptName,
								_id : ppts._id,
								pptCreateDate : ppts.pptCreateDate,
								pptLastAlterDate : ppts.pptLastAlterDate,
								public : ppts.public,
								psWord : ppts.psWord,
								sectionObj : sectionObj||null
							})
						}
						
				fn && fn(returnObj,Math.ceil(count/ pageNum));
			})
	});
	
	
	
	//

	/*
	
	*/
	
}

module.exports = findPPT;


	/*pptArr.find({  //先对整个ppt进行排序
		"_id":{
			"$in" : pptIds
		}
	},function(err,ppt){
		if(err)
			console.log(err);
		ppt.function(err,ppt){
				for(var i = 0;i<ppt.length;i++){
					ppts = ppt[i];
					if(ppts.sectionObj[0]){
						sectionObj = JSON.parse(ppts.sectionObj[0]);
						sectionObj.length = 1;
						sectionObj = JSON.stringify(sectionObj);
					}
					else{
						sectionObj = null;
					}
					
					returnObj.push({
						pageAll : pageAll,
						pptName : ppts.pptName,
						_id : ppts._id,
						pptCreateDate : ppts.pptCreateDate,
						pptLastAlterDate : ppts.pptLastAlterDate,
						public : ppts.public,
						psWord : ppts.psWord,
						sectionObj : sectionObj||null
					})
				}
				
				fn && fn(returnObj);
		}).sort(sort).skip((page-1)*pageNum+1).limit(6);
	}
			*/
