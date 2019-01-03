'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

var quoteService = require('./Services/quotesService');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.write(Object.keys(quoteService.quotes).length);
    res.end('Hello World\n');
}).listen(port);
