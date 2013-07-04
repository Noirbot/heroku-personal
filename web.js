var express = require("express");
var app = express();
var publicFolder = __dirname + '/public'

app.use(express.logger());
app.use(express.static(publicFolder));

app.set('view engine', 'jade');

app.get('/', function(request, response) {
  response.render('game');
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});