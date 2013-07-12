var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 fs.readFileSync('index.html','utf8',function(err,data){
  
    if(err) throw err;
    //  var outputbuffer = new Buffer(1026);
     // outputbuffer.write(data,"utf-8");
     // response.send(outputbuffer.toString("utf-8"));
     console.log(data);
});
response.send("back to app get fun);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
