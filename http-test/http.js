const http = require('http');

const exit = require('./exit');

let config = null;

if (process.env.NODE_ENV === 'development') {
    config = require('./config.development');
} else {
    config = require('./config.production');
}

let server = http.createServer(function(req, res) {
    try {
        let body = 'Hello world';
        // res.writeHead(200, {
        //     'Content-Length': Buffer.byteLength(body)
        // })
        res.setHeader('Connection', 'close');
        res.end(body);
        // res.write(body, 'utf8', function() {
        //     res.end(function() {
        //         console.log('ddd');
        //     });
        // });
    } catch (err) {
        console.log(err);
        res.statusCode = 400;
        res.end('Error Request\n');
    }
});
server.on('close', function() {
    console.log('The server is closed');
});
server.on('connection', function(socket) {
    console.log(socket.address());
});
server.listen(config.port, function() {
    console.log('The server is started at port ' + config.port);
});

process.on('SIGINT', () => {
    exit(server);
});

process.on('SIGTERM', () => {
    console.log('Received SIGTERM.  You send kill');
    exit(server);
});
