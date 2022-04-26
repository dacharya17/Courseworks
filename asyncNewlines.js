var fs=require('fs');
fs.readFile(function (err, data) {
    if (err) throw err;
    
  });
  fs.readFile(process.argv[2], function (err, contents) {
    var countlines = contents.toString().split('\n').length - 1;
    console.log(countlines);
    })



