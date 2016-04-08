var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list){
	var extFilter  = "." + process.argv[3];
	var extLen = (extFilter.length) * -1;
	for(var x = 0; x < list.length; x++){
		if(list[x].slice(extLen)===extFilter){
			console.log(list[x]);
		}
	}
});



     // var fs = require('fs')
     // var path = require('path')

     // fs.readdir(process.argv[2], function (err, list) {
     //   list.forEach(function (file) {
     //     if (path.extname(file) === '.' + process.argv[3])
     //       console.log(file)
     //   })
     // })