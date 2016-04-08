var fs = require('fs');
var path = require('path');
var myFunction = require('./myFunction.js');

myFunction(process.argv[2], process.argv[3], function(err, list){
	if(err) {
		console.log("An error occurred: ", err)
	} else {
		console.log(list)
	}
})

