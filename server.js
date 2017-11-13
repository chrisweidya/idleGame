var express = require('express');

var routes = require('./routes.js');
var app = express();


app.use('/', express.static(__dirname));
app.get('/', routes.game);

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
});