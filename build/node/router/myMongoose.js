var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/duhao');
var db = mongoose.connection;

var Schema = mongoose.Schema;

var users = new Schema({
	username :  { type : String ,required :  true, unique:true },
	password :  { type : String ,required :  true,unique:false },
	friend : [{
		username : String 
	}],
	pptIds : []
})
var pptArr = new Schema({
	pptName : { type : String ,required :  true },
	pptCreateDate : Date,
	pptLastAlterDate : Date,
	public : Boolean,
	psWord : String,
	sectionObj : [Schema.Types.Mixed]

})	

var pptArr = mongoose.model('pptarrs',pptArr);
var users = mongoose.model('duhaos',users);


db.on('error',function(err , docs){
	console.log(err);
})
var obj = {
	pptArr :pptArr,
	users : users,
	Schema : Schema
}
module.exports = obj;





 