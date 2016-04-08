var fs = require('fs');
var path = require('path');

var myFunction = function(fPath, extFilter, callback){
	 fs.readdir(fPath, function(err, list){
		if(err) 
			return callback(err); 
		list.forEach(function(file){
			if(path.extname(file) === '.' + extFilter){
				return callback(null, file);
			}
		})
	})
}

module.exports = myFunction;

