var fs=require('fs');
var buffer=fs.readFileSync(process.argv[2]);

var nooflines=buffer.toString();
var countlines=nooflines.split("\n");
console.log("There are "+ (countlines.length-1) + " New lines in the file");









