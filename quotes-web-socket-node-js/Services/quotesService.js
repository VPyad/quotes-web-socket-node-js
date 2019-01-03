//'use strict'

var fs = require('fs');

const IMAGE_PATH = './Assets/Img/Quotes';
const QUOTES_JSON_PATH = '../Data/quotes.json'

var quotes = require(QUOTES_JSON_PATH);
var images = fs.readdirSync(IMAGE_PATH);

var quotesLength = quotes.length;
var imagesLength = images.length;

function randIndexInRange(max) {
    return Math.floor(Math.random() * (max));
}

console.log(images[3]);
//console.log(quotes[randIndexInRange(quotes.length)].text);

function getImg() { }

function getQuote() { }