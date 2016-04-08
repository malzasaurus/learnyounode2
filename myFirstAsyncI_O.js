var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(error,contents){
	var contentsArray = contents.split("\n");
	console.log(contentsArray.length-1);
});
