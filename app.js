const http = require('http');

http.createServer((req, res) => {
  res.end('Hello World');
}).listen(3000);
console.log('server is running at localhost:3000');