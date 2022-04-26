
var request = require('request');
var cherio = require('cherio');
var nodemailer= require('nodemailer');

var artist = process.argv[2];

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth:{
        user: '', // email and password has been removed.
        pass: ''
    }
});

 request('http://www.popvortex.com/music/charts/top-rap-songs.php', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cherio.load(html);
   $('em.artist').each(function () {
            if ($(this).text() == artist) {
                console.log("Artist: " + $(this).text() + " | Title: " + $(this).siblings('cite.title').text());
            }
        });
    }


var mailOptions= {
from: '"David Acharya"<testnodemailerdavid@gmail.com>',
to: 'gahdavidac@gmail.com',
subject: 'Your Artists are(s):'+ artist,
text:''
};
if (artist==''){
    console.log ("Please specify at least one artist !");
    return;
}
transporter.sendMail(mailOptions,function(error,info)
{
    console.log ("Mail Sent Successfully");
})
});
