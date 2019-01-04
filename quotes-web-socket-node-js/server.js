'use strict';
var express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express();

const server = http.createServer(app);
var webSocketServer = require('websocket').server;

var port = process.env.PORT || 1337;

var quoteService = require('./Services/quotesService');

let q = quoteService.getQuotes(0);

app.use('*/images', express.static(path.join(__dirname, 'Assets/Img/Quotes')));

app.get('/', function (req, res) {
    res.end('Hello world');
});

app.use('/quote', function (req, res, next) {
    let payload = quoteService.getQuote();
    res.status(200);
    res.json(payload);
});

app.use('/quotes', function (req, res, next) {
    let page = req.query.page;

    if (page == null || page <= 0) {
        let payload = { message: "page param is incorrect" };
        res.status(400);
        res.json(payload);
    }
    else {
        let quotes = quoteService.getQuotes(page);
        res.status(200);
        res.json(quotes);
    }
});

app.use(function (req, res, next) {
    var payload = { message: "Not found" };
    res.status(404);
    res.json(payload);
});

server.listen(port);

var wss = new webSocketServer({
    httpServer: server,
    path: "/live"
});

wss.on('request', function (request) {
    var connection = request.accept('', request.origin);

    console.log('Connection created');

    setInterval(function () {
        connection.send(JSON.stringify(quoteService.getQuote()));
    }, 3000);

    connection.on('message', function (message) {
        connection.send(JSON.stringify(quoteService.getQuote()));
    });

    connection.on('close', function (reasonCode, description) {
        console.log('Peer ' + connection.remoteAddress + ' disconnected at : ', new Date());
    });
});

