var fs = require('fs');
var filepath = require('path');
var directory = process.argv[2];
var ext1 = process.argv[3]
fs.readdir(directory, function(err, files){
  if(err){
    throw err
  }
  files.forEach(function(filename){
    var ext = filepath.extname(filename);
    if(ext == ext1){
      console.log(filename);
    }
  });
});