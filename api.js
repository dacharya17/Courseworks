var express = require("express")
var url=require("url")
var app =express();
app.get(function (req, res) {

    var parsedUrl = url.parse(req.url, true),
        date = new Date(parsedUrl.query.iso),
        result = '';

    if (/api\/parsetime/.test(req.url)) {

        result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };

    } else if (/api\/unixtime/.test(req.url)) {
        
        result = {
            unixtime: date.getTime()
        };
    }

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    return res.end(JSON.stringify(result));
});

app.listen(process.argv[2]);