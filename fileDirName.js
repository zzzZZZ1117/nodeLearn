const http = require("http");
const fs = require("fs");
const path = require("path");

var server = http.createServer(function(req,res){
    var htmlPath = path.join(__dirname,"/views/view.html");
    var htmlContent = fs.readFileSync(htmlPath);
    console.log(htmlContent)
    htmlContent = htmlContent.toString("utf8");
    console.log(htmlContent)


    res.writeHead(200,{"Content-type": "text/html"});
    res.write(htmlContent);
    res.end();
});

server.listen(8081)
console.log("server in listening 8081");
console.log(process.cwd())