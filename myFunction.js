var fs = require('fs');
var path = require('path');

var myFunction = function(fPath, extFilter, callback){
	 fs.readdir(fPath, function(err, list){
		if(err) 
			return callback(err, null); 
		var filtList = [];
		list.forEach(function(file){
			if(path.extname(file) === '.' + extFilter){
				filtList.push(file);
			}
		})
		return callback(null, filtList)
	})
}

module.exports = myFunction;

