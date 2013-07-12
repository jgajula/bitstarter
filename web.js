var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var filedata = "initial data";


app.get('/', function(request, response) {

  fs.readFileSync('index.html', 'utf8', function(err,data){
    if(err){
      response.send('error occured');
     }
     var outbuffer = new Buffer(256);
     len = outbuffer.write(data,0);
     response.send(outbuffer.toString('utf8',0,len));

    });

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
