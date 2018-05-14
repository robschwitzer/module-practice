var https = require('https');

function getAndPrintHTML () {
  var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
  };


  https.get(requestOptions, function(response) {
    if (response.statusCode !== 200) {
      console.log('error from server');
      return;
    };
    response.setEncoding('utf-8');
    var buffer = new Buffer(8);
      // console.log('this is the buffer length: ', buffer.length);
      // console.log(typeof buffer);
    response.on('data', function(chunk){
      buffer += chunk;

      console.log(buffer + '\n\n\n\n\n');
    });
    response.on('end', function() {
     console.log('Response stream complete');
    });
  });
}

getAndPrintHTML()