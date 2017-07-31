function managerFile(fs,wayName,fileName){
	let route = {
		way : wayName+'/public/user/'+fileName,
		positionWay : 'http://ganjz:3000/user/'+fileName,
		imgArr : {}
	}
	let exi = new Promise(function(resolve,reject){
			fs.exists(route.way,function(obj,err){  // 检查目录是否存在
				if(err)
					reject(err);
				resolve(obj);
			});	
	})
	let creatDir = function(){ //创建文件夹
		return exi.then(function(obj){
				if(obj){
					console.log("文件存在");
					return true;
				}
				else
					return new Promise(function(resolve,reject){
						fs.mkdir(route.way,function(err){
							if(err)
								console.log(err+'创建目录出错');
							else
							  resolve("创建成功")
						});		
					});
		});
	}
	let deleteDir = function(way){  // 删除文件夹
		return exi.then(function(obj){
				if(!obj){
					console.log("文件不存在");
					return true;
				}
				else
					return new Promise(function(resolve,reject){
						fs.rmdir(route.way,function(err){
							if(err)
								console.log(err+'删除目录出错');
							else
							resolve("删除成功")
						});		
					});
		});
	}
	let deleteFile = function(){  //删除文件
		return exi.then(function(obj){
				if(!obj){
					console.log("文件不存在");
					return true;
				}
				else
					return new Promise(function(resolve,reject){
						fs.unlink(route.way,function(err){
							if(err)
								console.log(err+'删除目录出错');
							else
							resolve("删除成功")
						});		
					});
		});
	}
	let saveFile = function(dataBuffers){  //批量写入图片文件
		let base64Data,
			type,
			dataBuffer,
			name,
			value,
			types = "'bmp','jpg','png','tiff','gif','pcx','tga','exif','fpx','svg','psd','cdr','pcd','dxf','ufo','eps','ai','raw','WMF'";
						    

		var save =function(){
			return new Promise(function(resolve,reject){
					var obj;
					dataBuffers = JSON.parse(dataBuffers);
					dataBuffers.forEach(function(val,index){
							for(let key in val){
								name = key;
								value = val[key];
								
							}
							 
						    base64Data = value.replace(/^data:image\/\w+;base64,/, "").replace(/\s/g,"+");
						    type = value.split(';base64')[0].split('/')[1].trim().toLowerCase();
						    route.imgArr[name] = route.positionWay+'/'+ name +'.' +type;
						    
						   dataBuffer = new Buffer(base64Data, 'base64');
						   if(types.indexOf(type))
						    {
								fs.writeFileSync(route.way+'/'+ name +'.' +type, dataBuffer);
						      }
					})
						 
					resolve(route.imgArr);
				});
		}

 		return exi.then(function(obj){
				if(!obj){  //不存在目录
					return creatDir().then(function(inf){
						return save();
					})
					
				}
				else
					return save();
		});
	}
	return { 
			creatDir : creatDir,
			deleteDir : deleteDir,
			deleteFile : deleteFile,
			saveFile : saveFile
		}
}
module.exports = managerFile;