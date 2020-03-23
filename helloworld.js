const http = require("http")

http.createServer(function(req,res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end("<h1>你好 world</h1>");
}).listen(8081);
console.log("server is listening 8081")