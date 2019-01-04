//'use strict'

module.exports = { getQuote, getQuotes }

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

function getQuotes(page) {
    if (page == null || page <= 0) {
        return null;
    }

    let limit = 10;
    let offset = 0;

    if (page > 1) {
        offset += page * limit - limit;
        limit += page * limit - limit;
    }

    let quotesObj = quotes.slice(offset, limit);
    let quotesArr = new Array();

    quotesObj.forEach(function (item) {
        let text = item.text;
        let author = item.from;
        let img = "/images/" + images[randIndexInRange(imagesLength)];

        let quote = {
            author: author,
            img: img,
            quote: text
        };

        quotesArr.push(quote);
    });

    return quotesArr;
}