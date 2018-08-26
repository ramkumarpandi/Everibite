var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Server started\n');
}).listen(3000, 'LocalHost');
console.log('Server running at http://localhost:3000/Main.js');