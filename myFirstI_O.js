var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
var contentsArray = contents.toString().split("\n");
console.log(contentsArray.length-1);