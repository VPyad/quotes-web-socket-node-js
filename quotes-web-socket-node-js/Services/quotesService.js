//'use strict'

module.exports = { getQuote }

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

function getQuote() {
    let quoteObj = quotes[randIndexInRange(quotesLength)];

    let text = quoteObj.text;
    let author = quoteObj.from;
    let img = "/images/" + images[randIndexInRange(imagesLength)];

    let result = {
        author: author,
        img: img,
        quote: text
    };

    return result;
}

//getQuote();