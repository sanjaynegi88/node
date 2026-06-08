const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if(req.url == "/about"){
    res.end('Welcome to our page');
    }else{
    res.end('Pipeline Successfully Added Now we can begin the development');
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});


