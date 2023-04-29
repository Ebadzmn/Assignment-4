const http = require('http')
const fs = require('fs')
const port = 3000;

const server = http.createServer(function(req, res) {
    if(req.url == '/' || req.url=='/index') {
        fs.readFile('./public/index.html', function (err, data) {
            if(err) {
                res.writeHead(404, {"content-type": "text/html"});
                res.write("File not found");
                res.end('')
            } else {
                res.writeHead(200, {"content-type": "text/html"});
                res.write(data);
                res.end('')
            }
        })
    } else if(req.url == '/about') {
        fs.readFile('./public/about.html', function (err, data) {
            if(err) {
                res.writeHead(200, {"content-type": "text/html"});
                res.write("File not found");
                res.end('')
            } else {
                res.writeHead(404, {"content-type": "text/html"});
                res.write(data);
                res.end('')
            }
        })
    }else {
        const data = fs.readFileSync('./public/error.html');
        res.writeHead(404, {"content-type": "text/html"});
        res.write(data);
        res.end()
    }
})

server.listen(port, function () {
    console.log(`Server running at port ${port}`)
})