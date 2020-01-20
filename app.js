var http = require('http');
var host = '127.0.0.1';
var port = 3000;

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end('hello, world!\n');
}).listen(port, host);

console.log('Server is Running at http://'+host+':'+port);