'use strict';
var express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express();
var port = process.env.PORT || 1337;

var quoteService = require('./Services/quotesService');

app.use('*/images', express.static(path.join(__dirname, 'Assets/Img/Quotes')));

app.get('/', function (req, res) {
    res.end('Hello world');
});

http.createServer(app).listen(port);
