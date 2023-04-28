const http = require('http');
const fs = require('fs');
const path = require('path');

const publicDirectoryPath = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/html');


  const filePath = path.join(publicDirectoryPath, req.url);


  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
 
      res.statusCode = 404;
      res.end('<h1>404 Not Found</h1>');
      return;
    }


    fs.readFile(filePath, (err, data) => {
      if (err) {

        res.statusCode = 500;
        res.end('<h1>500 Internal Server Error</h1>');
        return;
      }


      res.statusCode = 200;
      res.end(data);
    });
  });
});

server.listen(3000)
console.log('Done')
