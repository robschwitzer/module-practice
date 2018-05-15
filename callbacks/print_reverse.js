var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var str = html.split('').reverse();
  console.log(str.join(''));
  // console.log(html.split(' ').reverse().join(''));
}

getHTML.getHTML(requestOptions, printReverse);