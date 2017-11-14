const express = require('express');
var app = express();

//假数据路由
const fs = require('fs');
const dirPath = __dirname.split('readRouter')[0];

let path = `/port`;
let routerArr = [];
let fileSet = new Set();
path = dirPath + path
	function sendFile(){
		new Promise(function(resolve){
			fs.readdir(path ,function(err,files){

				resolve(files);
			})
		})
		.then(function(files){
			files.map(function(filename){
				let routerName = '/'+filename.split('.')[0];
				if(!fileSet.has(routerName)){
					fileSet.add(routerName);
					
						app.get(routerName,function(req,res){
							res.header("Access-Control-Allow-Origin", "*");
							
							res.send(JSON.parse(fs.readFileSync(path+'/'+filename)));
						})	
					
				}
			})
			
		})
	}
	setInterval(function(){
		sendFile();
	},2000)
console.log('test data in listening localhost 12570 ')
var server = app.listen(12570)