    var express = require('express');
    var app = express();

    var gdata = require('./googlesheet');

// set up server
    // app.get('/', function (req, res) {
    // res.send('Hello World');
    // })

    // var server = app.listen(8081, function () {
    // var host = server.address().address
    // var port = server.address().port
    
    // console.log("Now listening at http://%s:%s", host, port)
    // })

// every day at 7:30ET
    // Cron will run this program
// Get pushup data from google sheets 
    console.log(gdata);

// Put that info into an email or text Message
// send email or text message