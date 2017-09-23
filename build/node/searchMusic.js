/* WangYi cloud music api */

const URL = 'music.163.com'; //search url
const port = 80;
const path = '/api/search/get/web?csrf_token=';
/*
hlpretag=&amp;
hlposttag=&amp;
s=周杰伦&amp;
type=1&amp;
offset=0&amp;
total=true&amp;
limit=10
*/
let http = require('http');
let qs = require('querystring');

let options = {  
    hostname: URL,  
    port: port,  
    path: path,  
    method: 'POST',  
    headers: {  
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
    }  
};  
let callMusic = (name,callback)=>{
	let postDate = `hlpretag=&hlposttag=&s=${name}&type=1&offset=0&total=true&limit=10`
	let content = qs.stringify(postDate);
	var req = http.request(options, function (serverFeedback) {  
	        if (serverFeedback.statusCode == 200) {  
	            var body = "";  
	            serverFeedback.on('data', function (data) { body += data; })  
	                          .on('end', function () { 
	                          		callback&&callback(body);
	                           });  
	        }  
	        else {  
	            res.send(500, "error");  
	        }  
	    });  
 	req.write(postDate);
	req.end();  
}
module.exports = callMusic;