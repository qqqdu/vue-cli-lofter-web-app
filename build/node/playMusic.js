/* WangYi cloud music api */
const URL = 'music.163.com'; //search url

const path = '/weapi/song/enhance/player/url';
const Encrypt = require('./crypot.js')
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
    path: path,  
    method: 'POST',  
    headers: {  
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
    }  
};  


  let postDate  = {
    ids: [418603077],
    br : 128000,
    csrf_token: ''
  }
  const cryptoreq = Encrypt(postDate)
  let dataCon = qs.stringify({
      params: cryptoreq.params,
      encSecKey: cryptoreq.encSecKey
    });
    console.log(dataCon)
let playMusic = (callback)=>{
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

 	req.write(
    dataCon
  )
	req.end();  
}
module.exports = playMusic;