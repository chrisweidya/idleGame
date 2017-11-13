var http = require('http');
var fs = require('fs');

var game = fs.readFileSync('index.html');

exports.game = function(req,res) {
	res.render(game);
}
