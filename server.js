//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);//var io = socketio.listen(server);

var wellbores = require('./routes/wellbores');
var curves = require('./routes/curves');
var data = require('./routes/data');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(express.static(path.resolve(__dirname, 'client')));

router.use('/wellbores', wellbores);
router.use('/curves', curves);
router.use('/data', data);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});


//module.exports = router;
