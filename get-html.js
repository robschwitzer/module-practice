var https = require('https');
var getHTML = require('./http-functions');
var address = ['sytantris.github.io', '/http-examples/step1.html'];

getHTML.getHTML(address, getHTML.printHTML);

