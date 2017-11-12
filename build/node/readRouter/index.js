//假数据路由
const fs = require('fs');
const dirPath = __dirname.split('readRouter')[0];

let path = `/port`;
let routerArr = [];
path = dirPath + path
let dataRouter = app => {
	console.log(app);
	app.get('/dh',function(req,res){
					
					res.send('hello');
				})	
	new Promise(function(resolve){
		fs.readdir(path ,function(err,files){
			resolve(files);
		})
	})
	.then(function(files){
		files.map(function(filename){
			let file = JSON.parse(fs.readFileSync(path+'/'+filename));
			let routerName = '/'+filename.split('.')[0];
			(function(routerName){
				app.get('/dh',function(req,res){
					console.log('get')
					res.send(file);
				})	
			})(routerName);
			
		})
		
	})
};
module.exports = dataRouter;