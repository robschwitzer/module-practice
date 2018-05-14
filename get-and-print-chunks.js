var https = require('https');
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
  response.on('data', function(chunk){
    console.log(chunk + '\n\n\n\n\n');
  });
  response.on('end', function() {
    console.log('Response stream complete');
  });

});

