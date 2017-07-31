
 let upDatePPT = {  //函数
 		pptArr : null,
 		imgArr : {},
 		isImg : function(str){
 			//<img $img58e4b619887d5c2b28eb4f4b_0e2img$/>
 			let re =  /\$img([^img\$]*?)img\$/gi;
 			let src = '';
 			console.log(str);
			return str.replace(re,function(val){
					
					src = val.substring(4,val.length-4);
					
					return `src="` + upDatePPT.imgArr[src] + `"`;
				})
 		},
		addPage : function(){
			let obj = {
				"parameter" : null,
				"element" : null
			};
			this.pptArr.sectionObj.push(obj);
		},
		addEle : function(arg){
			let	{id,type,html,page} = arg;
			if(this.pptArr.sectionObj.length===0) //如果没有page，则新增一张
				this.addPage(); 
			if(!this.pptArr.sectionObj[+page]['element']){
				this.pptArr.sectionObj[+page]['element'] = {};
			}
			if(!this.pptArr.sectionObj[+page]['element'][id]){
				this.pptArr.sectionObj[+page]['element'][id] = {};
			}
			if(html){
				console.log(1)
				if(!this.pptArr.sectionObj[+page]['element'][id]['text'])
					this.pptArr.sectionObj[+page]['element'][id]['text'] = {};
				console.log(2);
				html = this.isImg(html);
				console.log(html)
				this.pptArr.sectionObj[+page]['element'][id]['text']['value'] = html;
				//this.pptArr.sectionObj[+page]['element'][id]['text']['value'] = ;
			}
			this.pptArr.sectionObj[+page]['element'][id]['type'] = type; //节点类型
			this.pptArr.sectionObj[+page]['element'][id]['attr'] = {}; 
			this.pptArr.sectionObj[+page]['element'][id]['attr']['class'] = id;
		},
		addPageStyle : function(...arg){
			
		},
		dropPage : function(arg){
		},
		addEleStyle : function(arg){
			
			let	{id,type,name,str,page} = arg;
			
			if(!this.pptArr.sectionObj[+page]['element'][id][type]){
				this.pptArr.sectionObj[+page]['element'][id][type] = {};
				
			}

			this.pptArr.sectionObj[+page]['element'][id][type][name] = str;
			
		},
		dropEleStyle : function(arg){
		}
}; 


var savePPT = function(pptArr,users,req,imgDate,fn){
	
	var sectionObj = req.body.sectionObj,
		pptId = req.body.pptId,
		 pptName = req.body.pptName,
		that = this;
		returnObj = [];
	return (function(){
			pptArr.findOne({'_id' : pptId },function(err,ppts){
				upDatePPT.imgArr = imgDate;

				upDatePPT.pptArr = ppts;
				sectionObj = JSON.parse(sectionObj);
					sectionObj.forEach(function(val,index){
						upDatePPT[val['name']](val['json']||null);
					})	
					ppts.markModified('sectionObj'); //混合文档需告知！！！
					ppts.save(function(err){
						if(err)
							console.log(err);
						else
							fn&&fn.apply(that,arguments);
					});
						
				
				
				/*
				console.log(sectionObj);
				[  {"name":"addEle","json":{"id":"58da9104fa80170964360549_0e1","type":"div","html":"点击添加内容","page":0}},
				   {"name":"addEleStyle","json":{"id":"58da9104fa80170964360549_0e1","type":"block","name":"left","str":"30%","page":0}},
				   {"name":"addEleStyle","json":{"id":"58da9104fa80170964360549_0e1","type":"block","name":"top","str":"40%","page":0}},
				   {"name":"addEleStyle","json":{"id":"58da9104fa80170964360549_0e1","type":"text","name":"value","str":"点击dsf添加内容","page":0}}
				 ]
				 */
				/*
				ppts.update({'sectionObj':sectionObj,'pptLastAlterDate': new Date()},function(err){
					if(err)
						return false;
					fn&&fn.apply(that,arguments);
				});
				*/
			});
			
	})();
	
}
module.exports = savePPT;

