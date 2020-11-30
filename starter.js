var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response)
{
    var url = request.url;
    if(request.url == '/') //아무것도 안넣으면 index.html로 설정
    {
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + url);
    //response.end(fs.readFileSync(__dirname + url)); //fs로 파일 읽어서 넣기
    response.end(fs.readFileSync(__dirname + url));
});
app.listen(80);
