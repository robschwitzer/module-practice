var https = require('https');

var address = ['sytantris.github.io', '/http-examples/step1.html'];

// module.exports =
function getHTML (options, callback) {
  var requestOptions = {
  host: options[0],
  path: options[1]
  };

  https.get(requestOptions, function(response) {
    if (response.statusCode !== 200) {
      // console.log('error from server');
      // return;
      callback('error from server');
      return;
    };
    response.setEncoding('utf-8');
    var buffer = new Buffer(8);
      console.log('this is the buffer length: ', buffer.length);
      // console.log(typeof buffer);
    response.on('data', function(chunk){
      buffer += chunk;
      // console.log(buffer + '\n\n\n\n\n');
      callback(buffer);
    });
    response.on('end', function() {
     console.log('Response stream complete');
    });
  });
}

function printHTML (html) {
        console.log(html);
    }

getHTML(address, printHTML);

module.exports.getHTML = getHTML;
module.exports.printHTML = printHTML;