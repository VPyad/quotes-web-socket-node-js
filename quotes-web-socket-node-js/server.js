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

app.use('/quote', function (req, res, next) {
    let payload = quoteService.getQuote();
    res.status(200);
    res.json(payload);
});

app.use(function (req, res, next) {
    var payload = { message: "Not found" };
    res.status(404);
    res.json(payload);
});

http.createServer(app).listen(port);
