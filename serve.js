var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"), {}, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("sent: index.html");
    }
  });
});

app.listen(80, function () {
  console.log('listening on port 80');
})

